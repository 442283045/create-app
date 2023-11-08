import { Outlet } from 'react-router-dom'

export default function () {
  return (
    <>
      <div>
        This is a default layout
      </div>
      <div><Outlet></Outlet></div>
    </>
  )
}
