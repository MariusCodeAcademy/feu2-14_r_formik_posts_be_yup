# React

## Links

1. https://formik.org/docs/tutorial
2. https://formik.org/docs/tutorial#schema-validation-with-yup
3. https://www.npmjs.com/package/yup


## One post obj

```javascript
{
    "id": 1,
    "image": "https://github.com/MariusCodeAcademy/posts-rest-json-server/blob/main/assets/html.jpg?raw=true",
    "title": "What is HTML?",
    "body": "HTML is a programming language that stands for Hypertext Markup Language." ,
    "archived": false,
    "userId": 9,
    "tags": ["front-end", "web-development"],
    "reactions": 2
  },
```

## Add formik

1. `npm install formik`
2. import useFormik hook and add configuration object
3. initialValues: pradindes input reiksmes
4. onSubmit - kas vyks pateikiant forma
5. susieti inputus su onChange ir value


## Add yup - validacijos paketas

1. `npm install yup`
2. import * as Yup from 'yup'

## Practice

1. prideti likusiem inputams klaidas su touched
2. prideti kad klases generuotusi su touched
3. pakeisti klaidos jsx 
```javascript
{formik.touched.image && formik.errors.image && (
  <p className='inputErroMsg'>{formik.errors.image}</p>
)}
```
i 
`<InputError error={formik.errors.image} touched={formik.touched.image} />`
4. vietoj `formik.touched.image && formik.errors.image ? 'inputErrorField' : ''` className padaryti su pagalbine funkcija getErrorClass(formik, 'image')
5. padaryti kad veiktu (level2) error `<InputError formik={formik} field={'title'} />`

## more practice

1. sukurti puslapi PostsPage
2. sukurti komponenta SinglePost kuris atvaizduos posta su siek tiek stiliaus.(atvaizuos is objekto pavaizduoto virsuje )
3. PostsPage tik uzsikrovus psl siustis postus is public/db/database.json ir issaugoti state.
4. PostsPage generuoti SinglePost use paduodant jiems duomenis is state


## CRUD

1. Create - create post - POST /posts
2. Read - read posts - GET /posts
3. ReadsiglePost - GET /posts/5
4. Delete - delete post - DELETE /posts/5



## DELETE 

// PostsPage sukurti deletePostHandler fn kuri argumentu gauna id to post kuri norima istrinti
// iskonsolinti id posto kuri norim istrinti.
// turedami id mes siunciam DELETE requesta i /posts/{postId}
// jei gaunam sekminga atsakyma parsisiunciam naujausia postu masyvo versija is back end

## SinglePostPage
// SinglePostPage
// pasiimti dinamini route parametra :postId
// susikurti state
// useEffecte parsisiusti vieno posto duomenis is be/posts/id
// nupiesti single posta


## nuoroda i singlePostPage
<Link to='/posts/5'>Read more</Link>

## 404 page 

1. padaryti Not found page kuris atsidaro jei nerastas psl.


## Users resursas 

1. Create a UsersPage.jsx
2. get all users from http://localhost:8001/users and save to state
3. Create SingleUser component. 
4. Loop over users state and create list of users as a grid or list
5. create filter on top of the list to filter users by name
   1. filter local state when entering search
   2. filter from backend when press search btn
6. create a select input with users towns and filter users upon selection.


## Add post users

1. naujo posto sukurimo formoj, pakeisti userId inputa i selecta.
2. sugeneruoti selekta is visu useriu duomenu, atvaizduoti vardus pasirinkime ir id kaip value.
3. pasirinkti useri ir sukurti posta.
4. Postu kortelese atvaizduoti kas yra posto savininkas.
5. postu virsuje atvaizuoti selekta su visai zmonemis kurie turi nors viena posta.
6. pasirinkus kazkuri zmogu atvaizduoti jo postus.