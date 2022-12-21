INSERT INTO [dbo].[users]
    (
        [first_name],
        [last_name],
        [age]
    )
VALUES 
    (
        @firstName,
        @lastName,
        @age
    )

SELECT SCOPE_IDENTITY() AS userId