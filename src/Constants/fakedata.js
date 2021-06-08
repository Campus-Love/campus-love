const campusers = [
    {
        id:'8',
        name:"Bestie Suzie",
        gender:"female",
        location:"Kikumi kikumi",
        age:"20 years",
        hobby:"reading",
        uni:"Makerere",
        image:"https://images.pexels.com/photos/1982966/pexels-photo-1982966.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    
    {  id:'1',
        name:"James",
        gender:"male",
        location:"wandegeya",
        age:"20 years",
        hobby:"chilling",
        uni:"Makerere",
        image:"https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612"
    },
    {
        id:'9',
        name:"Bestie",
        gender:"female",
        location:"Kikumi kikumi",
        age:"20 years",
        hobby:"outing",
        uni:"Makerere",
        image:"https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },


    {   id:'2',
        name:"James",
        gender:"male",
        location:"wandegeya",
        age:"20 years",
        hobby:"chilling",
        uni:"Makerere",
        image:"https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612"
    },
      {
         id:'3', 
        name:"James",
        gender:"male",
        location:"kikono",
        age:"20 years",
        hobby:"chilling",
        uni:"Makerere",
        image:"https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612"
    },
    {   id:'4',
        name:"James",
        gender:"male",
        location:"wandegeya",
        age:"20 years",
        hobby:"chilling",
        uni:"Makerere",
        image:"https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612"
    },
    {
        id:'5', 
       name:"James Katende Nicolas",
       gender:"male",
       location:"wandegeya",
       age:"20 years",
       hobby:"chilling",
       uni:"Makerere",
       image:"https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612"
   },
   {
    id:'10', 
   name:"Carlo",
   gender:"female",
   location:"kikino",
   age:"20 years",
   hobby:"chilling",
   uni:"Makerere",
   image:"https://images.pexels.com/photos/2701660/pexels-photo-2701660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},



   {   id:'6',
       name:"James",
       gender:"male",
       location:"wandegeya",
       age:"20 years",
       hobby:"chilling",
       uni:"Makerere",
       image:"https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612"
   },
   {
    id:'7',
    name:"Hilda",
    gender:"female",
    location:"Kikono",
    age:"19 years",
    hobby:"kissing",
    uni:"Makerere",
    image:"data:image/jpeg;base64,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"
},
   {   id:'11',
    name:"Happy",
    gender:"male",
    location:"ham",
    age:"20 years",
    hobby:"chilling",
    uni:"Makerere",
    image:"https://images.pexels.com/photos/2951142/pexels-photo-2951142.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},






    

]

export default campusers