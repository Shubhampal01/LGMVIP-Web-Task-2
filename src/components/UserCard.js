import React from 'react'

export default function UserCard(props) {
  return (
    <>
    <div className="card my-2 mx-2">
  <img src={props.avatar} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{`${props.firstName} ${props.lastName}`}</h5>
    <p className="card-text">Email: {props.email}</p>
  </div>
</div>
    </>
  )
}
