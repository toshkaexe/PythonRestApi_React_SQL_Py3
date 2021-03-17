import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

message = Mail(from_email='me@antonzeltser.com', 
            to_emails ='anton.zeltser@gmail.com', subject="Sending Sendgrid is fun",
            plain_text_content='and and and',
            html_content="<strong></strong>")


SENDGRID_API_KEY="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"
try: 
    sg=SendGridAPIClient(os.environ[SENDGRID_API_KEY])
    response = sg.send(message)
    print(response.status_code)
    print(response.body)
    print(response.headers)
except Exception as e:
    print(e)
