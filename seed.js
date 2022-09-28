// const {db, User, Pet, Product, Order} = require('./server/db')
const {db} = require('./server/db')
const User = require('./server/db/user')
const Pet = require('./server/db/pet')
const Product = require('./server/db/product')
const Order = require('./server/db/order')


const pets =[{
    name: 'Hansel',
    age: '2',   
    image:'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
    description:`This is Hansel. He's looking for a foster home or a permanent home. He came from Huntington Station. He he was very sick getting poisoned by pesticides from a neighbor who sprayed. He's obviously still a little scared but not nasty Loves to be pet and get treats.`,
    favoriteToys:'Stuffed animals',
    species: 'Cat'
},{
    name: 'Lucy',
    age: '2',   
    image:'https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg',
    description:`7 yr old, sweet, 3 legged, Vetted, spayed, nice, friendly, female.`,
    favoriteToys:'Ball Toys',
    species: 'Cat'
},{
    name: 'Simon',
    age: '3',   
    image:'https://ichef.bbci.co.uk/news/976/cpsprodpb/C17B/production/_126313594_gettyimages-1217576289.jpg',
    description:`Kitten siblings. Can be adopted separately or together.`,
    favoriteToys:'Mice & Plush Toys',
    species: 'Cat'
},{
    name: 'Domino',
    age: '2',   
    image:'https://www.goodnet.org/photos/620x0/32440_hd.jpg',
    description:`Nice 1yr old, male. He needs a nice home where he can get love and attention and playtime.`,
    favoriteToys:'Teasers & Wands',
    species: 'Cat'
},{
    name: 'Spike',
    age: '3',   
    image:'https://www.purina.co.uk/sites/default/files/2020-12/14-Fun-Facts-about-CatsHERO_0.jpg',
    description:`9 week old kittens. Can be adopted separately or together.`,
    favoriteToys:'Catnip Toys',
    species: 'Cat'
},{
    name: 'Shiva',
    age: '5',   
    image:'https://alaskapublic.org/wp-content/uploads/2022/07/juneau_cats.jpg',
    description:`9 week old kittens. Can be adopted separately or together.`,
    favoriteToys:'Scratchers',
    species: 'Cat'
},{
    name: 'Zorro',
    age: '2',   
    image:'https://static.onecms.io/wp-content/uploads/sites/34/2022/04/25/are-laser-pointers-safe-for-cats-0422.jpg',
    description:`Nice, friendly, 1 yr old, beautiful, lovely male needs a loving home.`,
    favoriteToys:'Interactive Toys',
    species: 'Cat'
},{
    name: 'Mr. Whiskers',
    age: '4',   
    image:'https://www.ukpets.com/blog/wp-content/uploads/2019/04/indoor-cat-breed-fb.jpg',
    description:`The last of the Islandia kittens. He is approx. 7-8 weeks old. He has been socialized and is sweet and loving.`,
    favoriteToys:'Interactive Toys',
    species: 'Cat'
},{
    name: 'Bear',
    age: '2',   
    image:'https://images.immediate.co.uk/production/volatile/sites/4/2018/08/iStock_13967830_XLARGE-90f249d.jpg?quality=90&resize=768,574',
    description:`21 lb, Vetted, tested, male. Nice cat. 21 lb cat named FEISTY has been in a crate for the last 3 of his 4 years!`,
    favoriteToys:'All Toys',
    species: 'Cat'
},{
    name: 'Teddy',
    age: '2',   
    image:'https://www.thesprucepets.com/thmb/QDw4vt7XXQejL2IRztKeRLow6hA=/2776x1561/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg',
    description:`This is TEDDY from East Islip. She is approx. 15 yrs old and VERY friendly. She has Calicivirus ( https://vcahospitals.com/know-your-pet/feline-calicivirus-infection) which is an oral & respiratory infection. She has started medication for it. She is also on thyroid meds. The Calicivirus is contagious so she will need to be in an isolated area away from other pets until fully healed. The thyroid meds are for life, but are easy to administer: 1 pill 2x a day either crushed in her food, or the pill can go directly in her mouth. She is very sweet and affectionate and beautiful.`,
    favoriteToys:'Everything!',
    species: 'Cat'
},{
    name: 'Brownie',
    age: '2',   
    image:'http://media.wbur.org/wp/2022/08/GettyImages-499713000-1000x653.jpg',
    description:`Bonded with Wesley. Trapped by PETS4LUV on 3/11/2022. PETS4LUV received a call from a local legislator regarding a sick cat (Wesley),seen at an apt complex off of Post Avenue in Westbury, NY, and his friend Brownie. She heard about what we do and reached out for help with trapping . We trapped Wesley and then went back and trapped Brownie. We took her to the vet and she is now together with Wesley in temporary foster care in someone's garage.`,
    favoriteToys:'Laser Toys',
    species: 'Cat'
},{
    name: 'Wesley',
    age: '6',   
    image:'https://cdn.mos.cms.futurecdn.net/KYEJp9vem3QQFGhi25SYx4-1200-80.jpg',
    description:`WESLEY: trapped by PETS4LUV on 3/2/2022. PETS4LUV received a call from a local legislator regarding a sick cat seen at an apt complex off of Post Avenue in Westbury, NY. She heard about what we do and reached out for help with trapping and vetting this cat. Dave, our founder, got back from vacation last night and went back to the apt complex today and successfully trapped the cat. He will be going to our vet for medical care on Friday. WESLEY UPDATE: WE took him to the vet and he is now on antibiotics for an infection & should feel better soon. BUT WE NEED A FOSTER HOME FOR HIM UNTIL WE CAN FIND HIM A FOREVER HOME He is timid but nice and not aggressive at all.`,
    favoriteToys:'Laser Toys',
    species: 'Cat'
},{
    name: 'Skye',
    age: '8',   
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPE15tyTSLTgZBucvcVzJPiNFZhe27mKyiwA&usqp=CAU',
    description:`Skye: She's about 8 years old came out of a backyard in Lindenhurst. Scared but extremely friendly nothing vicious. Spayed & all up-to-date on shots. Had dental work done.`,
    favoriteToys:'Chase Meowtain',
    species: 'Cat'
},{
    name: 'Bruno',
    age: '2',   
    image:'https://www.stuartmagazine.com/wp-content/uploads/sites/141/2022/08/Photo-courtesy-of-the-Humane-Society-of-the-Treasure-Coast-1024x683.jpg',
    description:`Bruno one of the Islip Terrace Cats. He needs a foster or adopter. He is getting vetted next week, Male, about 5 years old not neutered yet. Scared but friendly pettable & holdable`,
    favoriteToys:'Softies Buzzy Llama',
    species: 'Cat'
},{
    name: 'Tofu',
    age: '2',   
    image:'https://www.rover.com/blog/wp-content/uploads/kitten-sleeping-960x540.jpg',
    description:`Found in a person's yard. Tofu is an approx. 8-10 yr old, tested, vetted, female. She has only 2 teeth left but is exceptionally healthy. TOFU needs an ADOPTION or a FOSTER to work with her. She is semi-friendly but very scared; needs an experienced person. `,
    favoriteToys:'Fuzzy Mice',
    species: 'Cat'
},{
    name: 'Miso',
    age: '1',   
    image:'https://media-be.chewy.com/wp-content/uploads/sleeping-kitten-TS_160626325.jpg',
    description:`MISO needs a FOREVER or a FOSTER HOME before the weather gets any colder! Vetted, tested, neutered & up to date on shots. Approx. 1yr old, male. Showed up in a backyard & won't leave. Nice cat! Chatty too . NEEDS A HOME!`,
    favoriteToys:'Electronic Activity Cat Toy',
    species: 'Cat'
},{
    name: 'Dale',
    age: '2',   
    image:'https://cdn.pixabay.com/photo/2019/07/28/07/03/kitty-4368028_960_720.jpg',
    description:`Dale is an approx 8yr old, male cat that was at a 55+ community we received a call that he was in a fight. We trapped him & took him to the vet. He had chemical burns on his head & right side. He had an infection in his blood probably from the chemicals,`,
    favoriteToys:'Laser Toys',
    species: 'Cat'
},{
    name: 'Jasmine',
    age: '7',   
    image:'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/155293403-cat-adoption-checklist-632x475-e1354290788940.jpg',
    description:`Grey, female tabby with beautiful stripes and spots. She is friendly and outgoing and BONDED with her sweet brother Yoda.`,
    favoriteToys:'Interactive Toys',
    species: 'Cat'
},{
    name: 'Yoda',
    age: '8',   
    image:'https://catrescues.org/wp-content/uploads/Charlotte-2009-C0698-Pic1.jpg',
    description:`Yoda is a white, Neutered, tested, Male, born on 04/30/2020. He is BONDED with his beautiful sister, Jasmine. He has a chronic eye issue, but it is easily manageable. The drain from his eye to his nose is plugged and cannot be surgically fixed. So he needs his one eye washed/wiped with a cotton, cosmetic pad with some Vetericyn eyewash on it, if you notice the eye draining. Some triple antibiotic cream on his nose at times too, if it drips. He allows it all, as he is friendly and outgoing.`,
    favoriteToys:'Caterpillar Cat Teaser',
    species: 'Cat'
},{
    name: 'Lee',
    age: '6',   
    image:'https://www.seattleareafelinerescue.org/wp-content/uploads/2019/07/Copy-of-Copy-of-USE-THIS-donate-header-1.png',
    description:`Lee is a 6 yr old, Neutered, tested, Male. He is all white with a light grey crown and beautiful blue eyes. He is friendly....a mush... and bonded with his sister Angel`,
    favoriteToys:'All toys',
    species: 'Cat'
},{
    name:'Thompson',
    age:'2',
    image:'https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__340.jpg',
    description:'This adorable puppy was rescued from an area where there is an abundance of homeless dogs. And now he is happy to learn new skills',
    favoriteToys:'all chew toys',
    species:'Dog',
    collarSize:'medium',
    status:'available'
},
{
    name:'Mardi',
    age:'5',
    image:'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg',
    description:'He is good in a home with kids, cats and other dogs.',
    favoriteToys:'squeaky toys',
    species:'Dog',
    collarSize:'large',
    status:'available'
},
{
    name:'Chase',
    age:'3',
    image:'https://image.shutterstock.com/image-photo/happy-puppy-dog-smiling-on-260nw-1799966587.jpg',
    description:'Like his name, he is very good at running and chasing!',
    favoriteToys:'teddy bear, fetch toys',
    species:'Dog',
    collarSize:'medium',
    status:'available'
}, 
{
    name:'Chloe',
    age:'1',
    image:'https://thumbs.dreamstime.com/b/happy-pet-dog-puppy-running-grass-jack-russell-background-banner-copy-space-128456559.jpg',
    description:'A happy and optimistic puppy! Especially frienly to children.',
    favoriteToys:'balls',
    species:'Dog',
    collarSize:'small',
    status:'available'
}, 
{
    name:'Zero',
    age:'1',
    image:'https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    description:'A little tiny cute puppy here!',
    favoriteToys:'chewy toys',
    species:'Dog',
    collarSize:'small',
    status:'available'
}, 
{
    name:'Beau',
    age:'5',
    image:'https://images.unsplash.com/photo-1554079501-a254f876fc77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoeSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80',
    description:'Big ears, big heart! He is very good with children and other pets at home.',
    favoriteToys:'fetch toys',
    species:'Dog',
    collarSize:'large',
    status:'available'
}
, 
{
    name:'CiCi',
    age:'2',
    image:'https://aller-petfood.com/wp-content/uploads/2018/03/ALL-Grainfee-Dog2-spot.jpg',
    description:'A perfect golden retriever here! Perfect for every day company and super friendly',
    favoriteToys:'stuffed animals',
    species:'Dog',
    collarSize:'large',
    status:'available'
}, 
{
    name:'Frankie',
    age:'3',
    image:'https://www.stockvault.net/data/2012/06/19/131807/thumb16.jpg',
    description:'An explorer! He likes to go to different places and have adventures every day.',
    favoriteToys:'fetch toys',
    species:'Dog',
    collarSize:'large',
    status:'available'
}, 
{
    name:'Jet',
    age:'4',
    image:'https://www.purina.com/sites/g/files/auxxlc196/files/styles/large/public/regular-vs-grain-free-dog-food-500x300.jpg?itok=MjHFdHNA',
    description:'He had an injury to his hip that required surgery and he is now ready to go home and start being a good friend. He could live with a role model adult dog or a dog-savvy cat.',
    favoriteToys:'plush toys',
    species:'Dog',
    collarSize:'large',
    status:'available'
}, 
{
    name:'Ginger',
    age:'2',
    image:'https://st2.depositphotos.com/2222024/5819/i/450/depositphotos_58199799-stock-photo-beautiful-happy-reddish-havanese-puppy.jpg',
    description:'He’s a sweet little man with a spunky, playful side.',
    favoriteToys:'all balls',
    species:'Dog',
    collarSize:'small',
    status:'available'
}, 
{
    name:'Nava',
    age:'5',
    image:'https://tractive.com/blog/wp-content/uploads/2016/08/TRNJAWH_01-768x576.jpg',
    description:'She has previously had some dog friends with slow introductions, and could probably live with another dog. He has no history with cats.',
    favoriteToys:'squeaky toys',
    species:'Dog',
    collarSize:'medium',
    status:'available'
},
{
    name:'Abby',
    age:'2',
    image:'https://www.petfinder.com/sites/default/files/styles/card/public/images/content/47.jpeg?itok=HNT_yv1F',
    description:'This little lady is the definition of a big personality in a tiny package. If you’re looking for a sassy, chatty, fun little adventure dog, Abby could be the one for you.',
    favoriteToys:'all toys',
    species:'Dog',
    collarSize:'small',
    status:'available'
},
{
    name:'Coco',
    age:'3',
    image:'https://img.freepik.com/free-psd/portrait-labrador-retriever-dog_53876-73960.jpg?w=360',
    description:'Coco is looking for a home with someone who has a good sense of humor and an active lifestyle.',
    favoriteToys:'stuffed bear',
    species:'Dog',
    collarSize:'large',
    status:'available'
},
{
    name:'Eli',
    age:'5',
    image:'https://images.freeimages.com/images/previews/d8b/dog-1407433.jpg',
    description:'She has a big personality that is silly and engaging. She loves being around people, and has recently started to show some interest in making a few new dog friends.',
    favoriteToys:'fetch toys',
    species:'Dog',
    collarSize:'large',
    status:'available'
},  
{
    name:'Grace',
    age:'2',
    image:'https://mycommunitypetclinic.com/wp-content/uploads/Untitled-design-57.png',
    description:'This adorable puppy is guaranteed to win you over with her quirky smile.',
    favoriteToys:'stuffed animals, balls',
    species:'Dog',
    collarSize:'small',
    status:'available'
},  
{
    name:'Cookie',
    age:'1',
    image:'https://patch.com/img/cdn20/users/22909805/20161223/115038/styles/raw/public/article_images/chihuahua-624924_640-1482511823-4148.jpg',
    description:'She loves to hangout with her person and follow them where ever they go. she got a long well with children.',
    favoriteToys:'chewy toys',
    species:'Dog',
    collarSize:'small',
    status:'available'
}, 
{
    name:'Hope',
    age:'7',
    image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leonberger-dog-sitting-in-forest-giant-breed-royalty-free-image-1658451196.jpg?crop=0.537xw:0.806xh;0.245xw,0.135xh&resize=480:*',
    description:'Hope is big outside but super soft inside. She has years of experience with people and she is a good company to anyone.',
    favoriteToys:'knot rope',
    species:'Dog',
    collarSize:'large',
    status:'available'
},  
{
    name:'Marshall',
    age:'4',
    image:'https://www.camprunamutt.com/chulavista/wp-content/uploads/sites/13/2022/03/dog-smiling-camp.jpg',
    description:'This handsome young guy is sweet, fun and full of energy.',
    favoriteToys:'fetch toys, balls',
    species:'Dog',
    collarSize:'large',
    status:'available'
},   
{
    name:'Luna',
    age:'2',
    image:'https://petkeen.com/wp-content/uploads/2021/05/West-Highland-White-Terrier-dog-at-home-eating_alejandro-rodriguez_shutterstock.jpg',
    description:'This pretty girl is just a delight! She loves her walks, entertaining herself with her toys and then is ready to settle in.',
    favoriteToys:'stuffed animals',
    species:'Dog',
    collarSize:'medium',
    status:'available'
},  
{
    name:'Rubio',
    age:'3',
    image:'https://www.rover.com/blog/wp-content/uploads/2017/03/filled-bone.jpg',
    description:'Rubio loves wolking! He will be a great future walking buddy and companion.',
    favoriteToys:'fetch toys',
    species:'Dog',
    collarSize:'large',
    status:'available'
}]

const products =[{
    name: 'leash',
    price: 10.00,
    quantity: 20,
    size: 'small',
    description: 'Only for puppy!'
},{
    name: 'treats',
    price: 5.00,
    quantity: 30,
    description: 'Only for kitty!'    
},{
    name: 'toy',
    price: 15.00,
    quantity: 10,
    description: 'Toys for all!'
}]

const users =[{
    userName:'aaronub',
    password:'123456',
    email:'wo-08@hotmail.com',
    firstName:'Aaron',
    lastName:'Wang',
    address:'Westbury, NY',
    yearsOfExperience: 5,
    isAdmin: true
},{
    userName:'dandan',
    password:'111111',
    email:'dandan@hotmail.com',
    firstName:'Dandan',
    lastName:'Li',
    address:'Greenwich, CT',
    yearsOfExperience: 2,
    isAdmin: true    
}]

const orders = [{
    isCart:false,
    items:[{name:'Leash', quantity:1, price:10},
           {name:'Treats', quantity:1, price:15}
          ]
},{
    isCart:false,
    items:[{name:'Treats', quantity:1, price:15},
           {name:'Toy', quantity:1, price:20}
          ]
},{
    isCart:false,
    items:[{name:'Laser toy', quantity:1, price:8},
           {name:'Collar', quantity:1, price:18}
          ]
}]

const seed = async () => {
    try {
        await db.sync({force: true})

        await Promise.all(pets.map(pet => {
        return Pet.create(pet);
        }));

        await Promise.all(products.map(product => {
        return Product.create(product);
        }));

        await Promise.all(users.map(user => {
        return User.create(user);
        }));

        await Promise.all(orders.map(order => {
            return Order.create(order);
        })); 
        const order1 = await Order.findByPk(1)
        order1.update({userId: 1})
        await order1.save()
        const order2 = await Order.findByPk(2)
        order2.update({userId: 1})
        await order2.save()
        const order3 = await Order.findByPk(3)
        order3.update({userId: 1})
        await order3.save()

        console.log('Seeding success!')
        db.close()
    }
    catch (err) {
        console.error('Oh noes! Something went wrong!')
        console.error(err)
        db.close()
    }
}

seed();