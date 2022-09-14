import { SeachFormContainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react'

export function SearchForm() {
  return (
    <SeachFormContainer>
      <input type="text" placeholder="Busque por transações" />

      <button type="submit">
        <MagnifyingGlass size={20}/>
        Buscar
      </button>
    </SeachFormContainer>
  )
}