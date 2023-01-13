

function Title({title}:{title:string}): JSX.Element {
  return (
    <h1 className="text-xl text-slate-700 text-left border p-4 bg-gray-100">{title}</h1>
  )
}

export default Title