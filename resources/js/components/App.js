import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes,Navigate, useNavigate ,useSearchParams} from 'react-router-dom';
import CustomWrapper from './customwrapper';
import CustomWrapper2 from './customwrapper2'
import user from '../Models/user';
import Cart from './Cart';
import Home from './Home';
import Products from './Products';
import AddProducts from'./AddProducts';
import Profile from './Profile';
import ProductView from './ProductView'
import Dashboard from './Dashboard';
import SellerDashboard from "./SellerDashboard";
import SellerLogin from './authComps/SellerLogin'
import SellerRegister from './authComps/SellerRegister'
import CustomerRegister from './authComps/CustomerRegister'
import CustomerLogin from './authComps/CustomerLogin'
import SellerProducts from './SellerProducts';
import Orders from './Orders'
import ViewOrder from './ViewOrder';
import SearchView from './Searchview';



function App() {
    const navigate=useNavigate();
    const[ products,setProducts]=useState([])
    const [orders,setOrders]=useState([])
    const [loading,setLoading]=useState(true)
    const [params,setparams]=useSearchParams()
    const [images,setImages]=useState([])
    const [buyer,setBuyer]=useState();
    
    useEffect(()=>{
        window.axios.get("/api/products").then((response)=>{
            console.log(response.data)
            setProducts(response.data)}) 
        setLoading(false)
    },[]);
    useEffect(()=>{

    },[])

    useEffect(()=>{
       
        if(user.isLoggedIn()===false){
            return null
        }
        window.axios.get('/api/basicdetails').then((response)=>{
            console.log(response.data)
            setBuyer({date_of_birth:response.data.date_of_birth,address:response.data.address});

        });
    },[user.isLoggedIn()]);
    useEffect(()=>{
        if(user.isLoggedIn()===false){
            return null
        }
        
        (updateOrders)()
      
    },[user.isLoggedIn()])
    const updateOrders=async ()=>{
        window.axios.get('/api/orders')
        .then(async resp=>{
            console.log(resp.data)
            await setOrders(resp.data)})
        

    }
    const onUpdate=(e,obj)=>{
        e.preventDefault();
        window.axios.put("/api/details",{birth:obj.dob,address:obj.address}).then((response)=>{
            console.log(response.data);
            setBuyer({
                date_of_birth:response.data.date_of_birth,
                address:response.data.address

           })
        }); 
    }
    // const preloadImages = (products) => {
    //     let links = products.map(product=>product.productimage)
    //     console.log(links)
    
    //     /* the one react-specific thing is this.setState */
    //     setImages(
    //         links.map((link,i)=>{
    //             var img=new Image()
    //             img.onload=()=>handleImageLoad(i)
    //             img.src=link
    //             return{
    //                 url: link,
    //                 loaded: false
    
    //             }
    
    //         })

    //     )
       
    // }
    // const handleImageLoad = (index) => {
    //         console.log(images)
    //         var imaged  = images
    //         imaged[index].loaded = true
    //         console.log(imaged)
    //         setImages(imaged)
    // }
    
    const authenticatedCallback = () => {
        navigate('/dashboard',{replace:true})
    }
    const sellerAuthenticatedCallback=()=>{
        navigate('/seller/dashboard',{replace:true})
    }
    const handleLogin=(e,callback,credentials)=>{
        e.preventDefault();
        window.axios.post('/api/login',credentials).then(
            (response)=>{
                console.log(response.data)
                
                user.authenticated(response.data,callback);
                
               } ).catch(
                   (response)=>{
                       setError("Invalid Details.Please check signin details and try again");
                   }
               )
    }
    const handleRegister=(e,callback,values)=>{
        e.preventDefault();
        window.axios.post("/api/checkEmail",values).then((response)=>{
            if(response.data){
                setError({
                    ...errors,
                    emailError:"Email already linked with existing user"
                });
            }else{
                if(values.password!==values.confirm_password){
                    setError({
                        ...errors,
                        confError:"Password does not match"
                    });


                }
                else{
                    window.axios.post("/api/createUser",values).then((response)=>{
                        console.log(response)
                        user.authenticated(response.data,callback);

                    })
                }

            }
        });
    }
    const cartUpdate= async (e,id,price,action)=>{
        e.persist();
        //Add an item to user cart( for authenticated users)
        const response= await window.axios.put("/api/addCart",{productId:id,price:price,action:action})
        
        console.log(response)
        // then((response)=>{
        //     console.log(response.data)
        //     console.log(products[0])
        //     let updatedproduct=products.map(product=>{
        //         return product.id===id?{
        //             ...product,
        //             cart:product.cart.map((carted,index)=>{
        //                 return index===0?{
        //                     ...carted,
        //                     pivot:{
        //                         ...carted.pivot,
        //                         amount:carted.pivot.amount+1
        //                     }
                            


                            
                           
        //                 }:
        //                 carted
        //             })


        //         }     
        //         :product;   
        //      })
        //      console.log(updatedproduct)
            return false

        

    }
   
    
    const cartRem=(e,id)=>{
        e.persist();
        setLoading(true)
        //Remove an item from user cart( for authenticated users)
        window.axios.put("/api/remCart",{
            productId:id
        }).then((response)=>{
            console.log(response.data)
            if(response.data){
            let updatedproduct=products.map(product=>{
                return product.id===id?response.data      
                :product;   
                
             })
             setProducts(updatedproduct)
             }

             

           
           setLoading(false)

        })

    }
 
    
  
   
 
    
   
    return (
        <>
        
            <Routes>
                
                
                <Route path="/login" element={<CustomerLogin
                    handleLogin={handleLogin}
                    callback={authenticatedCallback}/>}
                />
                <Route path="/signup" element={<CustomerRegister
                    handleRegister={handleRegister}
                    callback={authenticatedCallback}/>}

                />
                <Route path="/seller/login" element={<SellerLogin
                    handleLogin={handleLogin}
                    callback={sellerAuthenticatedCallback}/>}
                />
                <Route path="/seller/signup" element={<SellerRegister
                    handleRegister={handleRegister}
                    callback={sellerAuthenticatedCallback}/>}

                />
                <Route path="/seller/dashboard" element={
                    <CustomWrapper2
                    isLoggedIn={user.isLoggedIn()}
                    role={user.role}
                    view={<SellerDashboard/>}/>
                    
                }>
                    <Route path="addproducts" element={<AddProducts/>}/>
                    <Route path="inventory" element={<SellerProducts/>}/>

                </Route>
                
                <Route  path="/dashboard" element={
                    <CustomWrapper 
                        isLoggedIn={user.isLoggedIn()}
                        role={user.role}
                        view={
                            <Dashboard 
                                buyer={buyer}
                            />}
                         />
                }>
                    <Route path="cart" element={
                        <Cart

                             updateOrders={updateOrders}
                            
                             cartUpdate={cartUpdate}/>
                    }/>
                    <Route path='' element={<Home/>}/>
                    <Route path='products' element={
                        <Products
                        products={products}
                        pars={params}
                        
                        loading={loading}
                        cartUpdate={cartUpdate}
                        />
                    }/>
                    <Route path="products/:id" element={
                        <ProductView
                            loading={loading}
                            products={products}
                            cartUpdate={cartUpdate}
                        />
                        }/>
                    <Route path='profile' element={
                        <Profile
                            buyer={buyer}
                            onUpdate={onUpdate}
                            />}
                    />
                    <Route path='orders' element={
                        <Orders
                            orders={orders}
                           
                        />
                        }/>
                    <Route path='orders/:id' element={
                    <ViewOrder
                        orders={orders}
                    />}/>

                </Route>
                
                
                    
              
               

            </Routes>

           
         
                        

          </>             
        
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
}
