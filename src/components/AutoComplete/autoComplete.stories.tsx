import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import AutoComplete, { DataSourceType } from './autoComplete'

interface LakerPlayerProps {
  value: string
  number: number
}

const simpleAutoComplete = () => {
  const mock = [
    'bradley',
    'pope',
    'caruso',
    'cook',
    'cousins',
    'james',
    'AD',
    'green',
    'howard',
    'kuzma',
    'McGee',
    'rando',
  ]
  const mock2 = [
    { value: 'bradley', number: 11 },
    { value: 'pope', number: 1 },
    { value: 'caruso', number: 4 },
    { value: 'cook', number: 2 },
    { value: 'cousins', number: 15 },
    { value: 'james', number: 23 },
    { value: 'AD', number: 3 },
    { value: 'green', number: 14 },
    { value: 'howard', number: 39 },
    { value: 'kuzma', number: 0 },
  ]
  const handleFetch = (query: string) => {
    // return mock.filter((name) => name.includes(query))
    // return mock2.filter((player) => player.value.includes(query))
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) => {
        const formatItems = items
          .slice(0, 10)
          .map((item: { login: any }) => ({ value: item.login, ...item }))
        return formatItems
      })
  }
  const renderOption = (item: DataSourceType) => {
    const newItem = item as DataSourceType<LakerPlayerProps>
    return (
      <>
        <h2>Name: {newItem.value}</h2>
        <p>number: {newItem.number}</p>
      </>
    )
  }
  return (
    <AutoComplete
      fetchSuggestions={handleFetch}
      onSelect={action('selected')}
      renderOption={renderOption}
    />
  )
}

storiesOf('AutoComplete Component', module).add(
  'AutoComplete',
  simpleAutoComplete
)
