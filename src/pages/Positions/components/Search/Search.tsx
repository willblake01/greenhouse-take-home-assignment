import { Button, Input } from '../../../../components'

type SearchProps = {
  className?: string
}

const Search = ({ className }: SearchProps) => {
  return (
    <div className={className}>
      <Input placeholder='Search Job Titles' />
      <Button text='Search' />
    </div>
  )
}

export default Search
