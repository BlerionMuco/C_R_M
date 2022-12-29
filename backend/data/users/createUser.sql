INSERT INTO [dbo].[users]
    (
        [first_name],
        [last_name],
        [age],
        [username],
        [email],
        [phone_number],
        [user_password],
        [user_verification_password],
        [role_id]
    )
VALUES 
    (
        @first_name,
        @last_name,
        @age,
        @username,
        @email,
        @phone_number,
        @user_password,
        @user_verification_password,
        @role_id
    )

SELECT SCOPE_IDENTITY() AS userId