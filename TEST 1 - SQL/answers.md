question 1 : 
    choisir la database : use kinternship2025;
    puis afficher les tables : show tables;
    puis afficher la description de chaque table: describe customers;
    ![alt text](image.png)
    describe order_items;
    ![alt text](image-1.png)
    describe orders;
    ![alt text](image-2.png)
    describe payments;
    ![alt text](image-3.png)
    describe products;
    ![alt text](image-4.png)
question2:
les relations entre les tables : 
    une relation entre la table "customers" et "orders" c'est une relation one-to-many càd un client peut effectuer une à plusieurs commandes 
    une relation entre order et products c'est une relation many-to-many ce qui nous a generer une table association "order_items"
    une relation entre la table order et payment c'est une relation one to many 
    NB: la table payment n'a pas une cle principale et order_id est une clé etrangere de la table payment 
question3 :
![alt text](image-5.png)