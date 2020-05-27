import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { sources } from '../sources'
import { graphql, StaticQuery, Link } from 'gatsby'
import { ensureObjectProperty } from '../utils/utils'

/**
 * variant:
 *   key         / implementation: material, fluent...
 *   reader
 *   keyboard
 */

const query = graphql`
  {
    allTestrunsJson {
      edges {
        node {
          id
          variant
          mode
          implementation
          environment {
            browser
            browserVersion
            reader
            readerVersion
          }
          scenarios {
            key
            passed
            narration
            notes
          }
          component
        }
      }
    }
  }
`

const indicatorStyle = {
  display: 'inline-flex',
  marginRight: '2px',
  width: '12px',
  height: '16px',
  borderRadius: '2px',
}

const TestRunScenarios = ({ scenarios, definition }) => {
  let passedTests = 0
  const runs = scenarios.map((scenario, index) => {
    let title = scenario.narration
    if (definition[scenario.key]) {
      title = `${definition[scenario.key]['description']}\n\nExpected:${
        definition[scenario.key]['expected']
      }\nNarration: ${scenario.narration}`
    }
    if (scenario.notes) {
      title = `${title}\nNotes:${scenario.notes}`
    }
    if (scenario.passed) {
      passedTests++
    }

    return {
      index,
      title,
      passed: scenario.passed,
    }
  })
  return (
    <div style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
      {runs.map((run) => (
        <div
          key={run.index}
          title={run.title}
          style={{
            ...indicatorStyle,
            background: run.passed ? 'green' : run.passed === false ? 'red' : '#ddd',
          }}
        ></div>
      ))}
      <span> {passedTests} </span>
    </div>
  )
}

const getScenarioDefinitions = (component, variantName) => {
  const test = sources[component]
  const definition = test.variants.filter((v) => v.names.indexOf(variantName) >= 0)[0]

  const scenarioDefinitions = {}
  ;['keyboard', 'reader'].map((mode) => {
    scenarioDefinitions[mode] = {}
    definition &&
      definition[mode] &&
      definition[mode].map((d) => (scenarioDefinitions[mode][d.key] = d))
  })
  return scenarioDefinitions
}

const ComponentTables = ({ runs, component }) => {
  const groupped = []
  const allKeysMap = {}
  runs.map((run) => {
    ensureObjectProperty(groupped, run.variant)
    ensureObjectProperty(groupped[run.variant], run.implementation)
    const key = [run.mode, run.environment.browser, run.environment.reader].join(' ')
    ensureObjectProperty(groupped[run.variant][run.implementation], key)
    groupped[run.variant][run.implementation][key] = run
    allKeysMap[key] = run
  })

  const allKeys = Object.keys(allKeysMap).sort()

  return Object.keys(groupped).map((variantName) => {
    const scenarioDefinitions = getScenarioDefinitions(component, variantName)
    const implemenations = Object.keys(groupped[variantName]).sort()

    return (
      <div key={variantName}>
        <h3 key={variantName}>Variant {variantName}</h3>

        <table>
          <thead>
            <tr key="head">
              <th key="key">{variantName}</th>
              {implemenations.map((i) => (
                <th key={i}>{i}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allKeys.map((key) => (
              <tr key={key}>
                <td key="key">{key}</td>
                {implemenations.map((i) => (
                  <td key={i}>
                    {groupped[variantName][i][key] && (
                      <>
                        <TestRunScenarios
                          scenarios={groupped[variantName][i][key].scenarios}
                          definition={scenarioDefinitions[allKeysMap[key].mode]}
                        />
                        <Link
                          to="/show-test-run"
                          state={{
                            component,
                            variantName,
                            name: i,
                            mode: allKeysMap[key].mode,
                            run: groupped[variantName][i][key],
                            testKey: key,
                          }}
                        >
                          ...
                        </Link>
                      </>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  })
}

const TestRuns = ({ name }) => {
  const componentTests = sources[name]
  if (!componentTests) {
    return `Component source ${name} not found`
  }

  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const componentTestRuns = data.allTestrunsJson.edges
          .filter((edge) => edge.node.component === name)
          .map((edge) => edge.node)
        return componentTestRuns && <ComponentTables component={name} runs={componentTestRuns} />
      }}
    />
  )
}

TestRuns.propTypes = {
  name: PropTypes.string,
}

export default TestRuns
