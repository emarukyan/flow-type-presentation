/* @flow */

const x = 'a text'
const getLength = (t: string) => t.length

// Error [flow] number (This type is incompatible with the expected param type of string)
getLength(145)

//////////////////////////////////////////////////////////////////////////////

type TSimpleObject = {
	id: number,
	value: string
}

const f = (obj: TSimpleObject) => {
	return obj.value * 100
}


//////////////////////////////////////////////////////////////////////////////
/////////////////////// REDUX ACTION EXAMPLE /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

type ICrop = {
	left: number,
	top: number,
	scale: number,
	rotation: number
}

type TActionTypeChangeTitle = {
	type: 'CHANGE_TITLE',
	value: string
}

type TActionTypeChangeCrop = {
	type: 'UPDATE_CROP',
	value: ICrop
}

type TActionTypes = TActionTypeChangeTitle | TActionTypeChangeCrop

type TState = {
	title: string,
	crop: ICrop
}

const reducer = (action: TActionTypes, state: TState) => {
	switch (action.type) {
		case 'CHANGE_TITLE':
			return {
				...state,
				title: action.value
			}
		case 'UPDATE_CROP':
			return {
				...state,
				crop: action.value
			}
	}
}

//////////////////////////////////////////////////////////////////////////////
/////////////////////// EXAMPLE REACT COMPONENT //////////////////////////////
//////////////////////////////////////////////////////////////////////////////
import React from 'react'
import Select from 'react-select'

type ISelectField = {
  className?: string,
  standard?: boolean
}

const SelectField = (props: ISelectField) => {
  const { className = '', standard = true } = props

  return (
    <span className={`${className} ${standard ? 'rf-standard_select' : ''}`}>
      <Select
        name='form-field-name'
        searchable={false}
        clearable={false} />
    </span>
  )
}


//////////////////////////////////////////////////////////////////////////////
/////////////////////// EXAMPLE REACT COMPONENT //////////////////////////////
//////////////////////////////////////////////////////////////////////////////
type IList = {
  list: (props: IList) => IList,
  listClassName?: string,
  listItemClassName?: string,
  onListElementClick: (item: Object) => void,
  ListItemElement?: string,
  ListElement?: string,
  onClick: (i: IList) => void
}

const List = (props: IList) => {
  const {
    list,
    listClassName,
    onClick,
    listItemClassName,
    ListItemElement = 'div',
    ListElement = 'div'
  } = props
  return (
    <ListElement className={listClassName}>
      {list.map((item, i) => (
        <ListItemElement
          onClick={() => onClick(item)}
          item={item}
          key={i}
          className={listItemClassName}
        />
      ))}
    </ListElement>
  )
}

export default List


//////////////////////////////////////////////////////////////////////////////
////////////////////////////////// GENERICS  /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

type IArrayIze<T> = {
	[x: string]: T
  }
  
function arrayIze<T>(obj: IArrayIze<T>): Array<T> {
	return Object.keys(obj).map(id => obj[id])
}

const wObjects = {
	a: { whateverProp: 1 },
	b: { whateverProp: 1 },
	c: { whateverProp: 1 }
}

const wosArray = arrayIze(wObjects)
wosArray
