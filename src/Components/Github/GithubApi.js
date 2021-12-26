import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function GithubApi () {

    const [res, setres] = useState([])

    const url = "https://api.github.com/users/AvineshTripathi"

    const headers = {
      Authorization: `bearer ${process.env.GITHUB}`
    }
    useEffect(() => {
      axios.get(url, {
        headers: headers
      }).then(res => {
        setres(res.data);
      })
    }, [])
    
    
    return (
        <div>
           Hi, {res}
        </div>
    )
}


