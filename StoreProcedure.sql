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

CREATE PROCEDURE SP_ObtenerProductContainerType(IN p_limite INT, IN p_container INT) 
BEGIN
    SELECT *
    FROM Products
    INNER JOIN ProductSuppliers ON Products.IdProduct = ProductSuppliers.IdProduct
    WHERE Products.ContainerType = p_container
    ORDER BY Products.Score DESC
    LIMIT p_limite;
END //

DELIMITER ;

-- para segun el type

DELIMITER //

CREATE PROCEDURE SP_ObtenerProductType(IN p_limite INT, IN p_type INT) 
BEGIN
    SELECT *
    FROM Products
    INNER JOIN ProductSuppliers ON Products.IdProduct = ProductSuppliers.IdProduct
    WHERE Products.Type = p_type
    ORDER BY Products.Score DESC
    LIMIT p_limite;
END //
DELIMITER ;