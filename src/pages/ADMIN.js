import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

function ADMIN() {

    const [ auth , setAuth ] = useState(false)
    
    

    // useEffect(() => {
    //     if(auth){
    //         axios.get("http://localhost:8000/api/userData")
    //         .then((res) => {
    //             setTableData(() => { return res.data });
    //         })
    //     }
    // } , [])



    function Login(){

        const [ data , setData ] = useState({username:"" , password:""})
        const [ loading , setLoading ] = useState(false)
        const [ errorMessage , setErrorMessage ] = useState(false)
        // Change
        function handleChange(event){
            const {name , value} = event.target
            setData((prev) => {
                return {
                    ...prev,
                    [name] : value
                }
            })
        }

        // Submit
        function handleSubmit(event){
            setLoading(true);
            setErrorMessage(false);
            event.preventDefault();
            console.log(data)
            axios.post("/api/login" , data)
            .then((res) => {
                if(res.data.status){
                    setAuth(() => {return true})
                }
                setLoading(false);
                setErrorMessage(false);
            })  
            .catch((err) => {
                setAuth(() => {return false})
                console.log(err)
                setErrorMessage("Invalid Credentials")
                setLoading(false);
            })
        }

        return (
        <>
        <div className="d-flex vh-100 flex-column justify-content-center">
        <form onSubmit={handleSubmit}>
            <div className="container">
            <div className="row">
                <div className="col-12">
                    <p className="text-center fs-4 text-white my-5">ADMIN LOGIN</p>
                </div>
            </div>
                <div className="row">
                <div className="flex-item ">
                    <input onChange={handleChange} type="text" name="username" id="username" className="form-control p-2 w-50 d-flex mx-auto" placeholder="Username" aria-describedby="helpId"  autoComplete='off' required  />
                </div>
                </div>
                <div className="row">
                <div className="flex-item ">
                    <input onChange={handleChange} type="text" name="password" id="password" className="form-control p-2 w-50 d-flex mx-auto my-4" placeholder="Password" aria-describedby="helpId" autoComplete='off' required />
                </div>
                </div>

                {loading && <Spinner />}

                <div className="row"><div className="flex-item">
                    {errorMessage && <p className='text-danger my-3 fs-5 text-center'>Invalid Credentials</p>}
                </div></div>

                <div className="row">
                <div className="flex-item ">
                    <input  type="submit" value="LOGIN" className='btn btn-lg d-flex mx-auto btn-danger my-5' />
                </div>
                </div>
            </div>
        </form> 
    </div></>)
    }

    function Data(){

        const [ tableData , setTableData ] = useState([])
        const [ reRender , setReRender ] = useState(false)
        useEffect(() => {
            axios.get("/api/userData")
            .then((res) => { setTableData( () => { console.log(res.data); return res.data.data }); })
            .catch((err) => { setTableData(false); console.log('Error on Data Retreival') })
        }, [reRender])

        function handleDelete(event){
            let id = (event.currentTarget.id);
            axios.delete(`/api/userData/${id}`)
            .then((res) => { 
                if(res.data.status) {
                    
                    setReRender((prev) => {return !prev}
                )
            }})
        }

       return ( <>
            {tableData.length !== 0 ? <div class="table-responsive p-2">
            <p className='text-white p-3 my-3 text-center fs-4'>Table Name</p>
            
            <table class="table table-striped table-hover border-0 table-dark text-light align-middle">
            <thead class="table-secondary">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody class="table-group-divider">
                { 
                    tableData.map(( row , index) => {
                        return (
                        <tr class="table-dark" >
                            <td scope="row">{++index}</td>
                            <td>{row.name}</td>
                            <td>{row.email ? row.email : "-"}</td>
                            <td>{row.number ? row.number : "-"}</td>
                            <td>{row.message ? row.message : "-"}</td>
                            <td><button onClick={handleDelete} id={row._id} className='btn btn-secondary'><i class="fa-solid fa-trash"></i></button></td>
                        </tr> )
                    }) 
                }
            </tbody>
            </table>
        </div>
        :
        <p className='text-white p-3 my-3 text-center fs-4'>No Data Found</p>
        }
        </>)
    }
  return (
    <>
        { auth ? <Data /> : <Login /> }
    </>
  )
}

export default ADMIN