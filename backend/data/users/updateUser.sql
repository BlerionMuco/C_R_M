UPDATE [dbo].[users]
SET [first_name]=@firstName,
    [last_name]=@lastName,
    [age]=@age
WHERE [id]=@userId

SELECT [id]
      ,[first_name]
      ,[last_name]
      ,[age]
  FROM [dbo].[users]
  WHERE [id]=@userId