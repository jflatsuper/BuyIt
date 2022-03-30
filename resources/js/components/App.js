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
import AuthenticatedTabView from './authComps/AuthenticationTabs';
import SellersAuthenticationView from './authComps/SellersAuth';
import SideBar from './SideBar1';



function App() {
    const navigate=useNavigate();
    const[ products,setProducts]=useState([])
    const [orders,setOrders]=useState([])
    const [loading,setLoading]=useState(true)
    const [params,setparams]=useSearchParams()
    const [images,setImages]=useState([])
    const [buyer,setBuyer]=useState();
    const [error,setError]=useState()
    
    useEffect(()=>{
        window.axios.get("/api/products").then((response)=>{
            console.log(response.data)
            setProducts(response.data)}) 
        setLoading(false)
    },[]);
    useEffect(()=>{

    },[])

    useEffect(()=>{
       
        user.email? window.axios.get('/api/basicdetails').then((response)=>{
            console.log(response.data)
            console.log(user.email)
            setBuyer({date_of_birth:response.data.date_of_birth,address:response.data.address});

        }):console.log('this is '+user.email)
            
        
        // console.log(' this is the user.loggedun'+user.isLoggedIn())
       
    },[user.email]);
    useEffect(()=>{
        user.email?(updateOrders)():console.log('user .loggedin is false')
        
        
        
      
    },[user.email])
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
                
               } ).catch((error)=>{
                       console.log(error.response.data.errors)
                    //    setError(error.response.data.errors.email)
                    setError({loginemail:error.response.data.errors.email})

                       setTimeout(()=>{setError(null)},9000)
                       
                           
                        
                    
                   }
               )
    }
    const handleRegister=(e,callback,values)=>{
        e.preventDefault();
        window.axios.post("/api/checkEmail",values).then((response)=>{
            // if(response.data){
                
            //     setError(
            //         {regemail:"Email already linked with existing user"}
            //     );
            //     setTimeout(()=>{setError(null)},5000)
            // }else{
        })
                if(values.password!==values.password_confirmation){
                    setError({
                        
                        confError:"Password does not match"
                    });
                    return setTimeout(()=>{setError(null)},5000)


                }
                else{
                    window.axios.post("/api/createUser",values).then((response)=>{
                        console.log(response)
                        user.authenticated(response.data,callback);

                    }).catch((err)=>{
                        console.log('err')
                        console.log(err.response.data.errors)
                        setError(err.response.data.errors)
                        return setTimeout(()=>{setError(null)},5000)
                    })
                }

        
        
    }
    const cartUpdate= async (e,id,price,size,action)=>{
        e.persist();
        //Add an item to user cart( for authenticated users)
        const response= await window.axios.put("/api/addCart",{productId:id,price:price,action:action,size:size})
        
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
                
                
                
                <Route path='/auth' element={<AuthenticatedTabView/>}>
                    <Route path="login" element={<CustomerLogin
                        handleLogin={handleLogin}
                        error={error}
                        callback={authenticatedCallback}/>}
                    />
                    <Route path="signup" element={<CustomerRegister
                        handleRegister={handleRegister}
                        error={error}
                        callback={authenticatedCallback}/>}

                    />

                </Route>
                <Route path='/seller' element={<SellersAuthenticationView/>}>
                    <Route path="login" element={<SellerLogin
                        handleLogin={handleLogin}
                        error={error}
                        callback={sellerAuthenticatedCallback}/>}
                    />
                    <Route path="signup" element={<SellerRegister
                        handleRegister={handleRegister}
                        error={error}
                        callback={sellerAuthenticatedCallback}/>}

                    />

                </Route>
                
                <Route path="/seller/dashboard" element={
                    <CustomWrapper2
                    isLoggedIn={user.isLoggedIn()}
                    role={user.role}
                    view={<SideBar/>}/>
                    
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
                    <Route path='' element={<Home/>}>
                        
                    </Route>
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
