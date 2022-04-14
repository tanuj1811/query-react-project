import React from 'react'
import { useNavigate } from 'react-router-dom'
import './adminFeatur.scss'

const AdminFeature = ({ className, queryId, answerId, ...restProps }) => {
  const navigate = useNavigate()
  const URL = `http://localhost:3000/${queryId}/query`

  const popUpMessage = (e) => {
    document.getElementById('custom-tooltip').style.display = 'inline'
    //document.execCommand("copy");
    setTimeout(function () {
      document.getElementById('custom-tooltip').style.display = 'none'
    }, 1000)
  }
  const featureHandler = (e) => {
    switch (e.target.name) {
      case 'edit':
        console.log('edit')
        queryId
          ? navigate(`/edit/${queryId}`, { replace: true })
          : navigate(`/edit/${answerId}`, { replace: true })
        break
      case 'delete':
        break
      case 'share':
        navigator.clipboard.writeText(URL)
        popUpMessage()
        break
      case 'post_answer':
        navigate('#post_answer')
        break

      default:
        break
    }
  }
  return (
    <div className={`adminFeatureComponent ${className}`}>
      {Object.entries(restProps).map((feature) => {
        return (
          <div className="feature">
            <button onClick={featureHandler} name={feature[0]}>
              {feature}
            </button>
            <span id="custom-tooltip">copied!</span>
          </div>
        )
      })}
    </div>
  )
}

export default AdminFeature
