# Esteem-Up Online Book Store

<div align="center">
<img src= "https://github.com/jinss5/e-commerce-books-backend/assets/62521403/f6139788-4f8b-4001-8349-957465892efa">
</div>

<div align="center">
  
## FrontEnd
  
<a href="https://github.com/junsobi">Junsop Kim<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>
<a href="https://github.com/hhyunah">Hyunah Park<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>
<a href="https://github.com/min2oyo">Seungmin Oh<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>
<a href="https://github.com/patatco">Heeyeon Kim<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>
<a href="https://github.com/sojin9820">Sojin Lee<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>

## BackEnd

<a href="https://github.com/jinss5">Jinseok Oh<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"></a>
<a href="https://github.com/Geun9">Jieun Lee<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"></a>

</div>
  
<div align="center"><h1>STACKS</h1></div>
  </br>
<div align="center">FRONTEND</div>
  <div align="center">
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
    <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
      <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=red">

  </div>
</br>
<div align="center">BACKEND</div>
<div align="center">
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"><br/>
  <img src="https://img.shields.io/badge/SQL-FFA500?style=for-the-badge&logo=sql&logoColor=white">
  <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
</div>

<h2>ERD diagram</h2>
<img src="https://github.com/jinss5/e-commerce-books-backend/assets/62521403/e0a271f6-54bf-468e-bdec-0dd21977c552">

### `Auth`
- Implemented robust email and password validation checks to ensure the integrity and security of user credentials.<br/>
- Sign Up: Utilized the industry-standard bcrypt hashing algorithm to encrypt and securely store user passwords, enhancing data protection<br/>
- Login: Implemented token-based authentication using the widely adopted jsonwebtoken library, ensuring secure and reliable user authentication.<br/>

### `Main`
Implemented advanced filtering, ordering, and pagination capabilities using optimized SQL queries.

- Filtering: Implemented a flexible filtering system that allows users to narrow down their search results based on sub and parent category.
- Ordering: Enabled users to sort product listings based on different attributes such as price, popularity, , and relevance. This empowers users to easily find the products that best meet their preferences and requirements.
- Pagination: Implemented efficient pagination techniques to handle large datasets, ensuring smooth and fast browsing experience for users. This allows users to navigate through product listings in a structured and manageable manner.

### `Detals`
- Implemented "Likes" functionality to allow users to express their appreciation for the book.
- Enhanced the user experience by providing comprehensive reviews and a detailed description of each book, empowering customers to make informed purchasing decisions.

### `Carts`
- View Cart: Retrieve the shopping cart items for a specific user, providing an overview of the selected products.
- Add to Cart: Combines both INSERT and UPDATE operations using UPSERT syntax, allowing for simultaneous insertion of new items and updating existing ones within a single query.
- Update Quantity: Enabled real-time updating of item quantities within the shopping cart, ensuring immediate synchronization with the database through an efficient UPDATE operation.
Remove from Cart: Implemented a single method to handle the removal of one or more products from the shopping cart, providing a convenient way for users to remove items with ease.

### `Order`
- Implemented transactional mechanisms throughout the payment process to ensure the adherence to ACID (Atomicity, Consistency, Isolation, Durability) properties, thus ensuring the reliability and integrity of the system.

### `Mypage`





