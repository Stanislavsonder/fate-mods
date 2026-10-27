import { deleteModData, getModData, setModData } from '@fate-app/mod-types'
import type { Character, FateContext } from '@fate-app/mod-types'
import type { CharacterRelation } from './types'

export const MOD_ID = 'sonder@relationships'
export const RELATIONS_KEY = 'relations'

export function onInstall(_context: FateContext, character: Character): void {
	setModData<CharacterRelation[]>(character, MOD_ID, RELATIONS_KEY, getModData<CharacterRelation[]>(character, MOD_ID, RELATIONS_KEY) ?? [])
}

export function onUninstall(_context: FateContext, character: Character): void {
	deleteModData(character, MOD_ID)
}

export function onReconfigure(_context: FateContext, _character: Character): void {}
