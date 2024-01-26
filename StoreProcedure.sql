DELIMITER //

CREATE PROCEDURE SP_ObtenerProductoMasVendido(IN limite INT)
BEGIN
  SET @limite = limite;
  SET @consulta = CONCAT('SELECT * FROM Products inner join ProductSuppliers on Products.IdProduct = ProductSuppliers.IdProduct ORDER BY Bestselling DESC LIMIT ', @limite);
  PREPARE stmt FROM @consulta;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
END //

DELIMITER ;