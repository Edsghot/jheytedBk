DELIMITER //

CREATE PROCEDURE SP_ObtenerProductoMasVendido(IN limite INT)
BEGIN
  SET @limite = limite;
  SET @consulta = CONCAT('SELECT * FROM Products ORDER BY Bestselling DESC LIMIT ', @limite);
  PREPARE stmt FROM @consulta;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
END //

DELIMITER ;