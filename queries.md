# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

select products.ProductName, categories.CategoryName
from products
inner join categories on products.categoryId = categories.categoryId

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

select orders.OrderID, shippers.ShipperName
from orders
inner join shippers on orders.ShipperID = shippers.ShipperID
where OrderDate < "1997-01-09"

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

select orders.OrderID, products.ProductName, OrderDetails.quantity
from orders
inner join OrderDetails on OrderDetails.OrderID = orders.OrderID
inner join products on orderdetails.ProductID = products.ProductID
where orders.OrderID = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

select orders.OrderID, customers.CustomerName, employees.LastName
from customers
inner join orders on customers.CustomerID = orders.CustomerID
inner join employees on orders.EmployeeID = employees.EmployeeID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 