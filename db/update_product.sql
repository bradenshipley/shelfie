UPDATE shelfie SET name = $2 SET price = $3 SET imgurl=$4 WHERE product_id= $1;
SELECT * FROM shelfie;