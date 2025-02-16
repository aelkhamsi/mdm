const Stats = ({
  title,
  value,
}:{
  title: string,
  value: any
}) => {
  return (
    <div className='text-3xl font-medium bg-gray-200 rounded-xl p-4 w-fit'>
      <div>
        {title}
      </div>
      <div className='text-gray-500'>
        {value}
      </div>
    </div>
  )
}

export default Stats
