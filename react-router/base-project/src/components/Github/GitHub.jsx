import { useLoaderData } from 'react-router-dom'

const GitHub = () => {
  const data = useLoaderData()
  return (
    <div className='bg-gray-700 text-center p-4 text-white text-3xl'>GitHub Followers are:{data?.followers} <img src={data?.avatar_url} alt="github piture" /></div>
  )
}
export default GitHub  


export const githubInfoLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/muhammadali7866')
  return response.json()

}