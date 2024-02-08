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

-- para recomendandos

DELIMITER //

CREATE PROCEDURE SP_ObtenerProductRecomendaded(IN limite INT)
BEGIN
  SET @limite = limite;
  SET @consulta = CONCAT('SELECT * FROM Products inner join ProductSuppliers on Products.IdProduct = ProductSuppliers.IdProduct ORDER BY ProductSuppliers.ScorePublic DESC LIMIT ', @limite);
  PREPARE stmt FROM @consulta;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
END //

DELIMITER ;

-- para segun el containertype

DELIMITER //
CREATE PROCEDURE SP_ObtenerProductContainerType(IN p_limite INT,IN p_container INT) 
begin
    
        SELECT * FROM Products 
        INNER JOIN ProductSuppliers ON Products.IdProduct = ProductSuppliers.IdProduct 
        WHERE ProductSuppliers.ContainerType = p_container
        ORDER BY ProductSuppliers.Score DESC 
        LIMIT p_limite;
end// 
DELIMITER;
