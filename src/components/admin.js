import React, {useState} from 'react';
import { TextField, Button, Stack } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
    const navigate = useNavigate();
    // product 
    const [productName, setproductName] = useState('')
    const [category, setcategory] = useState('')
    const [base, setbase] = useState('')
    const [price, setprice] = useState('')
    const [where, setwhere] = useState('')
    const [siteurl, setsiteurl] = useState('')
    const [imageurl, setimageurl] = useState('')
    //attributes
    const [at1, setat1] = useState('')
    const [at2, setat2] = useState('')
    const [at3, setat3] = useState('')
    const [at4, setat4] = useState('')

 
    const pushItem = async (event) => {
        event.preventDefault();

            if(productName === '' || category === '' || base === '' || price === '' || where === '' || siteurl === '' || imageurl === '' || at1 === '' || at2 === '' || at3 === '' || at4 === '') {
            alert('Please Fill all Fields');
            console.log('Bruh');
            return
        }

        try{

            if (category=== 'cpu')
            {
                console.log("here2");

                const response = await fetch('http://localhost:4000/api/auth/cpu',
                {
                  method: "POST", // *GET, POST, PUT, DELETE, etc.
                  mode: "cors", // no-cors, *cors, same-origin
                  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                  credentials: "same-origin", // include, *same-origin, omit
                  headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  redirect: "follow", 
                  referrerPolicy: "no-referrer", 
    
                  body: JSON.stringify({pname: productName, base: base, price: price,
                where: where, imageURL:  imageurl, siteURL: siteurl, at1: at1,
            at2: at2, at3: at3, at4: at4}), 
                })
    
             console.log(response.data) ; ;
            navigate('/homepage');

            }
            else if (category=== 'cpucooler')
            {
                console.log("here2");

                const response = await fetch('http://localhost:4000/api/auth/cpucooler',
                {
                  method: "POST", // *GET, POST, PUT, DELETE, etc.
                  mode: "cors", // no-cors, *cors, same-origin
                  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                  credentials: "same-origin", // include, *same-origin, omit
                  headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  redirect: "follow", 
                  referrerPolicy: "no-referrer", 
    
                  body: JSON.stringify({pname: productName, base: base, price: price,
                where: where, imageURL:  imageurl, siteURL: siteurl, at1: at1,
            at2: at2, at3: at3, at4: at4}), 
                })
    
             console.log(response.data) ; ;
            navigate('/homepage');

            }
            else if (category=== 'videocard')
            {
                console.log("here2");

                const response = await fetch('http://localhost:4000/api/auth/videocard',
                {
                  method: "POST", // *GET, POST, PUT, DELETE, etc.
                  mode: "cors", // no-cors, *cors, same-origin
                  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                  credentials: "same-origin", // include, *same-origin, omit
                  headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  redirect: "follow", 
                  referrerPolicy: "no-referrer", 
    
                  body: JSON.stringify({pname: productName, base: base, price: price,
                where: where, imageURL:  imageurl, siteURL: siteurl, at1: at1,
            at2: at2, at3: at3, at4: at4}), 
                })
    
             console.log(response.data) ; ;
            navigate('/homepage');

            }
            else if (category=== 'peripherals')
            {
                console.log("here2");

                const response = await fetch('http://localhost:4000/api/auth/peripherals',
                {
                  method: "POST", // *GET, POST, PUT, DELETE, etc.
                  mode: "cors", // no-cors, *cors, same-origin
                  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                  credentials: "same-origin", // include, *same-origin, omit
                  headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  redirect: "follow", 
                  referrerPolicy: "no-referrer", 
    
                  body: JSON.stringify({pname: productName, base: base, price: price,
                where: where, imageURL:  imageurl, siteURL: siteurl, at1: at1,
            at2: at2, at3: at3, at4: at4}), 
                })
    
             console.log(response.data) ; ;
            navigate('/homepage');

            }
            else if (category=== 'memory')
            {
                console.log("here2");

                const response = await fetch('http://localhost:4000/api/auth/memory',
                {
                  method: "POST", // *GET, POST, PUT, DELETE, etc.
                  mode: "cors", // no-cors, *cors, same-origin
                  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                  credentials: "same-origin", // include, *same-origin, omit
                  headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  redirect: "follow", 
                  referrerPolicy: "no-referrer", 
    
                  body: JSON.stringify({pname: productName, base: base, price: price,
                where: where, imageURL:  imageurl, siteURL: siteurl, at1: at1,
            at2: at2, at3: at3, at4: at4}), 
                })
    
             console.log(response.data) ; ;
            navigate('/homepage');

            }
            else if (category=== 'storage')
            {
                console.log("here2");

                const response = await fetch('http://localhost:4000/api/auth/storage',
                {
                  method: "POST", // *GET, POST, PUT, DELETE, etc.
                  mode: "cors", // no-cors, *cors, same-origin
                  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                  credentials: "same-origin", // include, *same-origin, omit
                  headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  redirect: "follow", 
                  referrerPolicy: "no-referrer", 
    
                  body: JSON.stringify({pname: productName, base: base, price: price,
                where: where, imageURL:  imageurl, siteURL: siteurl, at1: at1,
            at2: at2, at3: at3, at4: at4}), 
                })
    
             console.log(response.data) ; ;
            navigate('/homepage');

            }
            else if (category=== 'cases')
            {
                console.log("here2");

                const response = await fetch('http://localhost:4000/api/auth/cases',
                {
                  method: "POST", // *GET, POST, PUT, DELETE, etc.
                  mode: "cors", // no-cors, *cors, same-origin
                  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                  credentials: "same-origin", // include, *same-origin, omit
                  headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  redirect: "follow", 
                  referrerPolicy: "no-referrer", 
    
                  body: JSON.stringify({pname: productName, base: base, price: price,
                where: where, imageURL:  imageurl, siteURL: siteurl, at1: at1,
            at2: at2, at3: at3, at4: at4}), 
                })
    
             console.log(response.data) ; ;
            navigate('/homepage');

            }
            else if (category=== 'powersupply')
            {
                console.log("here2");

                const response = await fetch('http://localhost:4000/api/auth/powersupply',
                {
                  method: "POST", // *GET, POST, PUT, DELETE, etc.
                  mode: "cors", // no-cors, *cors, same-origin
                  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                  credentials: "same-origin", // include, *same-origin, omit
                  headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  redirect: "follow", 
                  referrerPolicy: "no-referrer", 
    
                  body: JSON.stringify({pname: productName, base: base, price: price,
                where: where, imageURL:  imageurl, siteURL: siteurl, at1: at1,
            at2: at2, at3: at3, at4: at4}), 
                })
    
             console.log(response.data) ; ;
            navigate('/homepage');

            }
            else if (category=== 'motherboard')
            {
                console.log("here2");

                const response = await fetch('http://localhost:4000/api/auth/motherboard',
                {
                  method: "POST", // *GET, POST, PUT, DELETE, etc.
                  mode: "cors", // no-cors, *cors, same-origin
                  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                  credentials: "same-origin", // include, *same-origin, omit
                  headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  redirect: "follow", 
                  referrerPolicy: "no-referrer", 
    
                  body: JSON.stringify({pname: productName, base: base, price: price,
                where: where, imageURL:  imageurl, siteURL: siteurl, at1: at1,
            at2: at2, at3: at3, at4: at4}), 
                })
    
             console.log(response.data) ; ;
            navigate('/homepage');

            }
          }

          catch(error){
            console.log(error); 
          }





      //  console.log(firstName, lastName, email, dateOfBirth, password) 
    }
    const handleChange = (event) => {
        setcategory(event.target.value);
      };

    const deleteItem= async (event) =>{
        event.preventDefault();

        if(productName === '' || category === '') {
        alert('Please Fill all Fields');
        console.log('Bruh');
        return
    }

    try{

        if (category=== 'cpu')
        {
            console.log("here2");

            const response = await fetch('http://localhost:4000/api/auth/cpu/:productName',
            {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                  "Content-Type": "application/json"
                },
                redirect: "follow",
                referrerPolicy: "no-referrer"
            })

         console.log(response.data) ; ;
        navigate('/homepage');

        }
        else if (category=== 'cpucooler')
        {
            console.log("here2");

            const response = await fetch('http://localhost:4000/api/auth/cpucooler/:productName',
            {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                  "Content-Type": "application/json"
                },
                redirect: "follow",
                referrerPolicy: "no-referrer"
            })

         console.log(response.data) ; ;
        navigate('/homepage');

        }
        else if (category=== 'videocard')
        {
            console.log("here2");

            const response = await fetch('http://localhost:4000/api/auth/videocard/:productName',
            {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                  "Content-Type": "application/json"
                },
                redirect: "follow",
                referrerPolicy: "no-referrer"
            })

         console.log(response.data) ; ;
        navigate('/homepage');

        }
        else if (category=== 'peripherals')
        {
            console.log("here2");

            const response = await fetch('http://localhost:4000/api/auth/peripherals/:productName',
            {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                  "Content-Type": "application/json"
                },
                redirect: "follow",
                referrerPolicy: "no-referrer"
            })

         console.log(response.data) ; ;
        navigate('/homepage');

        }
        else if (category=== 'memory')
        {
            console.log("here2");

            const response = await fetch('http://localhost:4000/api/auth/memory/:productName',
            {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                  "Content-Type": "application/json"
                },
                redirect: "follow",
                referrerPolicy: "no-referrer"
            })

         console.log(response.data) ; ;
        navigate('/homepage');

        }
        else if (category=== 'storage')
        {
            console.log("here2");

            const response = await fetch('http://localhost:4000/api/auth/storage/:productName',
            {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                  "Content-Type": "application/json"
                },
                redirect: "follow",
                referrerPolicy: "no-referrer"
            })

         console.log(response.data) ; ;
        navigate('/homepage');

        }
        else if (category=== 'cases')
        {
            console.log("here2");

            const response = await fetch('http://localhost:4000/api/auth/cases/:productName',
            {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                  "Content-Type": "application/json"
                },
                redirect: "follow",
                referrerPolicy: "no-referrer"
            })

         console.log(response.data) ; ;
        navigate('/homepage');

        }
        else if (category=== 'powersupply')
        {
            console.log("here2");

            const response = await fetch('http://localhost:4000/api/auth/powersupply/:productName',
            {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                  "Content-Type": "application/json"
                },
                redirect: "follow",
                referrerPolicy: "no-referrer"
            })

         console.log(response.data) ; ;
        navigate('/homepage');

        }
        else if (category=== 'motherboard')
        {
            console.log("here2");

            const response = await fetch('http://localhost:4000/api/auth/motherboard/:productName',
            {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                  "Content-Type": "application/json"
                },
                redirect: "follow",
                referrerPolicy: "no-referrer"
            })

         console.log(response.data) ; ;
        navigate('/homepage');

        }
      }

      catch(error){
        console.log(error); 
      }

    }
 
    return (
        <React.Fragment>

            <nav className="nav">
            <section class="nav_top">
            <h3 className="logoheader"> Admin View</h3>
            </section>
            </nav>

            <h2 className = "productformheader">Add Product</h2>
            <form className= "productform" onSubmit={pushItem}>
            <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Product Name"
                        onChange={e => setproductName(e.target.value)}
                        value={productName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Merchant "
                        onChange={e => setwhere(e.target.value)}
                        value={where}
                        fullWidth
                        required
                    />
                                        <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Base "
                        onChange={e => setbase(e.target.value)}
                        value={base}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Price "
                        onChange={e => setprice(e.target.value)}
                        value={price}
                        fullWidth
                        required
                    />
                </Stack>  
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>         
                <TextField
                    type="url"
                    variant='outlined'
                    color='secondary'
                    label="Site URL"
                    onChange={e => setsiteurl(e.target.value)}
                    value={siteurl}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="url"
                    variant='outlined'
                    color='secondary'
                    label="Image URL"
                    onChange={e => setimageurl(e.target.value)}
                    value={imageurl}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                </Stack> 
         <InputLabel> Category</InputLabel>
        <Select
          value={category}
          onChange={handleChange}
          autoWidth
          label="Category"
        >
          <MenuItem value={'cpu'}>CPU</MenuItem>
          <MenuItem value={'cpucooler'}>CPU Cooler</MenuItem>
          <MenuItem value={'motherboard'}>Motherboard</MenuItem>
          <MenuItem value={'memory'}>Memory</MenuItem>
          <MenuItem value={'storage'}>Storage</MenuItem>
          <MenuItem value={'videocard'}>Video Card</MenuItem> 
          <MenuItem value={'powersupply'}>Power Supply</MenuItem>
          <MenuItem value={'cases'}>Cases</MenuItem>
          <MenuItem value={'peripherals'}>Peripherals</MenuItem>  
                   
        </Select>

        {category === 'cpu' &&(
                <form style={{ marginTop: "10px" }}>               
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="number"
                            variant='outlined'
                            color='secondary'
                            label="Core Count"
                            onChange={e => setat1(e.target.value)}
                            value={at1}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="TDP"
                            onChange={e => setat2(e.target.value)}
                            value={at2}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Performance Core Clock"
                            onChange={e => setat3(e.target.value)}
                            value={at3}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Integrated Graphic"
                            onChange={e => setat4(e.target.value)}
                            value={at4}
                            fullWidth
                            required
                        />
                    </Stack>              
    
                </form>  ) }
        {category === 'memory' && (
                <form style={{ marginTop: "10px" }}>               
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Speed"
                            onChange={e => setat1(e.target.value)}
                            value={at1}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Modules"
                            onChange={e => setat2(e.target.value)}
                            value={at2}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="First word latency"
                            onChange={e => setat3(e.target.value)}
                            value={at3}
                            fullWidth
                            required
                        />
                        <TextField
                            type="number"
                            variant='outlined'
                            color='secondary'
                            label="CAS latency"
                            onChange={e => setat4(e.target.value)}
                            value={at4}
                            fullWidth
                            required
                        />
                    </Stack>              
    
                </form>  )}
        {category === 'cpucooler' &&(
                <form style={{ marginTop: "10px" }}>               
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Noise level"
                            onChange={e => setat1(e.target.value)}
                            value={at1}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Fan RPM"
                            onChange={e => setat2(e.target.value)}
                            value={at2}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Rotator Size"
                            onChange={e => setat3(e.target.value)}
                            value={at3}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Color"
                            onChange={e => setat4(e.target.value)}
                            value={at4}
                            fullWidth
                            required
                        />
                    </Stack>              
    
                </form>  ) }
        {category === 'motherboard' && (
                <form style={{ marginTop: "10px" }}>               
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Socket/ CPU"
                            onChange={e => setat1(e.target.value)}
                            value={at1}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Memory Max"
                            onChange={e => setat2(e.target.value)}
                            value={at2}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Form Factor"
                            onChange={e => setat3(e.target.value)}
                            value={at3}
                            fullWidth
                            required
                        />
                        <TextField
                            type="number"
                            variant='outlined'
                            color='secondary'
                            label="Memory slots"
                            onChange={e => setat4(e.target.value)}
                            value={at4}
                            fullWidth
                            required
                        />
                    </Stack>              
    
                </form>  )}     
        {category === 'storage' && (
                <form>               
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Type"
                            onChange={e => setat1(e.target.value)}
                            value={at1}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Capacity"
                            onChange={e => setat2(e.target.value)}
                            value={at2}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Cache "
                            onChange={e => setat3(e.target.value)}
                            value={at3}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Form Factor"
                            onChange={e => setat4(e.target.value)}
                            value={at4}
                            fullWidth
                            required
                        />
                    </Stack>              
    
                </form>  )}  
                {category === 'powersupply' && (
                <form> style={{ marginTop: "10px" }}                
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Wattage"
                            onChange={e => setat1(e.target.value)}
                            value={at1}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Type"
                            onChange={e => setat2(e.target.value)}
                            value={at2}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Efficiency Rating"
                            onChange={e => setat3(e.target.value)}
                            value={at3}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Modular"
                            onChange={e => setat4(e.target.value)}
                            value={at4}
                            fullWidth
                            required
                        />
                    </Stack>              
    
                </form>  )}     
        {category === 'videocard' && (
                <form style={{ marginTop: "10px" }}>               
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Chipset"
                            onChange={e => setat1(e.target.value)}
                            value={at1}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Memory"
                            onChange={e => setat2(e.target.value)}
                            value={at2}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Core Clock"
                            onChange={e => setat3(e.target.value)}
                            value={at3}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Boost Clock"
                            onChange={e => setat4(e.target.value)}
                            value={at4}
                            fullWidth
                            required
                        />
                    </Stack>              
    
                </form>  )} 

        {category === 'cases' && (
                <form style={{ marginTop: "10px" }}>               
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Type"
                            onChange={e => setat1(e.target.value)}
                            value={at1}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Color"
                            onChange={e => setat2(e.target.value)}
                            value={at2}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Side Panel"
                            onChange={e => setat3(e.target.value)}
                            value={at3}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Power Supply"
                            onChange={e => setat4(e.target.value)}
                            value={at4}
                            fullWidth
                            required
                        />
                    </Stack>              
    
                </form>  )} 
        {category === 'peripherals' && (
                <form style={{ marginTop: "10px" }}>               
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Product Type"
                            onChange={e => setat1(e.target.value)}
                            value={at1}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Style"
                            onChange={e => setat2(e.target.value)}
                            value={at2}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Color"
                            onChange={e => setat3(e.target.value)}
                            value={at3}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Wireless"
                            onChange={e => setat4(e.target.value)}
                            value={at4}
                            fullWidth
                            required
                        />
                    </Stack>              
    
                </form>  )} 
                <Button style={{ marginTop: "10px" }} variant="outlined" color="secondary" type="submit" >Post</Button>

            </form>    

            <h2 className = "productformheader">Delete Product</h2>
            <form className= "productform" onSubmit={deleteItem} >
            <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Product Name"
                        onChange={e => setproductName(e.target.value)}
                        value={productName}
                        fullWidth
                        required
                    />

                                <Select
                                value={category}
                                onChange={handleChange}
                                fullWidth
                                label="Category"
                                >
                                <MenuItem value={'cpu'}>CPU</MenuItem>
                                <MenuItem value={'cpucooler'}>CPU Cooler</MenuItem>
                                <MenuItem value={'motherboard'}>Motherboard</MenuItem>
                                <MenuItem value={'memory'}>Memory</MenuItem>
                                <MenuItem value={'storage'}>Storage</MenuItem>
                                <MenuItem value={'videocard'}>Video Card</MenuItem> 
                                <MenuItem value={'powersupply'}>Power Supply</MenuItem>
                                <MenuItem value={'cases'}>Cases</MenuItem>
                                <MenuItem value={'peripherals'}>Peripherals</MenuItem>                    
                                </Select>

                    </Stack>
                    <Button style={{ marginTop: "10px" }} variant="outlined" color="secondary" type="submit" >Delete</Button>
                </form> 

                <h2 className = "productformheader">Update Product</h2>
                <form className= "productform" >
            <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Product Name"
                        onChange={e => setproductName(e.target.value)}
                        value={productName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Merchant "
                        onChange={e => setwhere(e.target.value)}
                        value={where}
                        fullWidth
                        required
                    />
                                        <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Base "
                        onChange={e => setbase(e.target.value)}
                        value={base}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Price "
                        onChange={e => setprice(e.target.value)}
                        value={price}
                        fullWidth
                        required
                    />
                </Stack>  
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>         
                <TextField
                    type="url"
                    variant='outlined'
                    color='secondary'
                    label="Site URL"
                    onChange={e => setsiteurl(e.target.value)}
                    value={siteurl}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="url"
                    variant='outlined'
                    color='secondary'
                    label="Image URL"
                    onChange={e => setimageurl(e.target.value)}
                    value={imageurl}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                </Stack> 
         <InputLabel> Category</InputLabel>
        <Select
          value={category}
          onChange={handleChange}
          autoWidth
          label="Category"
        >
          <MenuItem value={'cpu'}>CPU</MenuItem>
          <MenuItem value={'cpucooler'}>CPU Cooler</MenuItem>
          <MenuItem value={'motherboard'}>Motherboard</MenuItem>
          <MenuItem value={'memory'}>Memory</MenuItem>
          <MenuItem value={'storage'}>Storage</MenuItem>
          <MenuItem value={'videocard'}>Video Card</MenuItem> 
          <MenuItem value={'powersupply'}>Power Supply</MenuItem>
          <MenuItem value={'cases'}>Cases</MenuItem>
          <MenuItem value={'peripherals'}>Peripherals</MenuItem>  
                   
        </Select>

        {category === 'cpu' &&(
                <form style={{ marginTop: "10px" }}>               
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="number"
                            variant='outlined'
                            color='secondary'
                            label="Core Count"
                            onChange={e => setat1(e.target.value)}
                            value={at1}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="TDP"
                            onChange={e => setat2(e.target.value)}
                            value={at2}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Performance Core Clock"
                            onChange={e => setat3(e.target.value)}
                            value={at3}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Integrated Graphic"
                            onChange={e => setat4(e.target.value)}
                            value={at4}
                            fullWidth
                            required
                        />
                    </Stack>              
    
                </form>  ) }
        {category === 'memory' && (
                <form style={{ marginTop: "10px" }}>               
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Speed"
                            onChange={e => setat1(e.target.value)}
                            value={at1}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Modules"
                            onChange={e => setat2(e.target.value)}
                            value={at2}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="First word latency"
                            onChange={e => setat3(e.target.value)}
                            value={at3}
                            fullWidth
                            required
                        />
                        <TextField
                            type="number"
                            variant='outlined'
                            color='secondary'
                            label="CAS latency"
                            onChange={e => setat4(e.target.value)}
                            value={at4}
                            fullWidth
                            required
                        />
                    </Stack>              
    
                </form>  )}
        {category === 'cpucooler' &&(
                <form style={{ marginTop: "10px" }}>               
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Noise level"
                            onChange={e => setat1(e.target.value)}
                            value={at1}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Fan RPM"
                            onChange={e => setat2(e.target.value)}
                            value={at2}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Rotator Size"
                            onChange={e => setat3(e.target.value)}
                            value={at3}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Color"
                            onChange={e => setat4(e.target.value)}
                            value={at4}
                            fullWidth
                            required
                        />
                    </Stack>              
    
                </form>  ) }
        {category === 'motherboard' && (
                <form style={{ marginTop: "10px" }}>               
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Socket/ CPU"
                            onChange={e => setat1(e.target.value)}
                            value={at1}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Memory Max"
                            onChange={e => setat2(e.target.value)}
                            value={at2}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Form Factor"
                            onChange={e => setat3(e.target.value)}
                            value={at3}
                            fullWidth
                            required
                        />
                        <TextField
                            type="number"
                            variant='outlined'
                            color='secondary'
                            label="Memory slots"
                            onChange={e => setat4(e.target.value)}
                            value={at4}
                            fullWidth
                            required
                        />
                    </Stack>              
    
                </form>  )}     
        {category === 'storage' && (
                <form>               
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Type"
                            onChange={e => setat1(e.target.value)}
                            value={at1}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Capacity"
                            onChange={e => setat2(e.target.value)}
                            value={at2}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Cache "
                            onChange={e => setat3(e.target.value)}
                            value={at3}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Form Factor"
                            onChange={e => setat4(e.target.value)}
                            value={at4}
                            fullWidth
                            required
                        />
                    </Stack>              
    
                </form>  )}  
                {category === 'powersupply' && (
                <form> style={{ marginTop: "10px" }}                
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Wattage"
                            onChange={e => setat1(e.target.value)}
                            value={at1}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Type"
                            onChange={e => setat2(e.target.value)}
                            value={at2}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Efficiency Rating"
                            onChange={e => setat3(e.target.value)}
                            value={at3}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Modular"
                            onChange={e => setat4(e.target.value)}
                            value={at4}
                            fullWidth
                            required
                        />
                    </Stack>              
    
                </form>  )}     
        {category === 'videocard' && (
                <form style={{ marginTop: "10px" }}>               
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Chipset"
                            onChange={e => setat1(e.target.value)}
                            value={at1}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Memory"
                            onChange={e => setat2(e.target.value)}
                            value={at2}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Core Clock"
                            onChange={e => setat3(e.target.value)}
                            value={at3}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Boost Clock"
                            onChange={e => setat4(e.target.value)}
                            value={at4}
                            fullWidth
                            required
                        />
                    </Stack>              
    
                </form>  )} 

        {category === 'cases' && (
                <form style={{ marginTop: "10px" }}>               
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Type"
                            onChange={e => setat1(e.target.value)}
                            value={at1}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Color"
                            onChange={e => setat2(e.target.value)}
                            value={at2}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Side Panel"
                            onChange={e => setat3(e.target.value)}
                            value={at3}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Power Supply"
                            onChange={e => setat4(e.target.value)}
                            value={at4}
                            fullWidth
                            required
                        />
                    </Stack>              
    
                </form>  )} 
        {category === 'peripherals' && (
                <form style={{ marginTop: "10px" }}>               
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Product Type"
                            onChange={e => setat1(e.target.value)}
                            value={at1}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Style"
                            onChange={e => setat2(e.target.value)}
                            value={at2}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Color"
                            onChange={e => setat3(e.target.value)}
                            value={at3}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Wireless"
                            onChange={e => setat4(e.target.value)}
                            value={at4}
                            fullWidth
                            required
                        />
                    </Stack>              
    
                </form>  )} 
                <Button style={{ marginTop: "10px" }} variant="outlined" color="secondary" type="submit" >Update</Button>

            </form>  

        </React.Fragment>
    )
}
 
export default ProductForm;