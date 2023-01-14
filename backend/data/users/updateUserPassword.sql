UPDATE [dbo].[users]
SET 
    [user_password]=@user_password,
    [user_verification_password]=@user_password
where [id]=@userId