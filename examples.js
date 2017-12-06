/* @flow */

type TMainType = { x: string, y?: string }

const a = {
	x: '10',
	y: '20'
}

const subA = {
	x: '12123'
}

function subT (obj: $Subtype<TMainType>) {
	return obj
}

subT ({ x: '' })
