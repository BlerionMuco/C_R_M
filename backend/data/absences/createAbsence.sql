INSERT INTO [dbo].[absences]
    (
        [user_id],
        [reason_id],
        [start_date],
        [end_date],
        [approve]
    )
VALUES 
    (
        @userId,
        @reasonId,
        @startDate,
        @endDate,
        @approve
    )