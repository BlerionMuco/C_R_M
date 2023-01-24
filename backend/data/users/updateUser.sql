UPDATE [dbo].[users]
SET [first_name]=@first_name,
    [last_name]=@last_name,
    [age]=@age,
    [username]=@username,
    [email]=@email,
    [phone_number]=@phone_number,
    [role_id]=@role_id
WHERE [id]=@userId

SELECT [id]
      ,[first_name]
      ,[last_name]
      ,[age]
      ,[username]
      ,[phone_number]
      ,[user_password]
      ,[user_verification_password]
      ,[role_id]
  FROM [dbo].[users]
  WHERE [id]=@userId