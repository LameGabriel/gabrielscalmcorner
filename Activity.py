import requests
from bs4 import BeautifulSoup

# Start a session
session = requests.Session()

# URL for login page and activity stream
login_url = 'https://sso.cwi.edu/adfs/ls/?SAMLRequest=lVLLbsIwEPwVa%2B%2BJnfC0RUC0CBWJqoiEHnpBJphiNbGp16H9%2FKYBBL0g9WLJ8szOzowHo%2B%2ByIEflUFuTQBQyIMrkdqvNewKrbBr0YTQcoCyL%2BCDGld%2BbpfqsFHpSEw2K00sClTPCStQojCwVCp%2BLdPw8F3HIxMFZb3NbABkjKudrqUdrsCqVS5U76lytlvME9t4fUFC6KWT%2BsbHSbcP8S4dqW1FZCwe%2FUrQ50vSFykJLpOv%2BOgIyqffRRvrGw2UMor3ytzukBVIgU%2Bty1fhIYCcLVEBmkwRkp93rchV3WdRhsrXr8g5vd3dRP%2BIx0zUGFxJRH9WVhVipmUEvjU8gZnE7YDxosYxFgrUE42GP8zcgi7P5B21Ood5LanMCoXjKskWweEkzIK%2BXcmoAnKsQjbq77eD%2BYHkJHob%2FinlAb%2FWG5%2BvfnzD8AQ%3D%3D&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=ZYhpH%2BzMHsYpVHsJbQCSbBGbtN7FoSgoumd2eHzeRWV6CsLUYExYN3Zh17pLNbujC0IK1qbzkzKJevOPyI1Icpd1tMfeObs3tasGF7Lk5oH1Zi49hE%2BkinAqHenLHhrcnKDI6%2B9Z%2F5%2F83Ph%2BKuTC7jBusBwYXbwGAwqVHovPKbtyCtLdfSxirOM5HRBZQgFXoP4RZ8NsubJngOa8y%2B3LBUdi%2B7s22GR%2FNPPs8BoTyMNtGqPf4cu6jhDybdMWIPec8%2B9DIgAjmNdeZ1AOVVqnI8qb9nFApYMBIIu8i8Dw3XN%2FNS3f%2BAt1TNpNmYSXnNmAO8aO7UTiOCsND23p8x1sGQ%3D%3D'
activity_stream_url = 'https://blackboard.cwi.edu/ultra/stream'

# Your login payload (replace with your credentials)
payload = {
    'username': '',  # Use your actual username
    'password': ''   # Use your actual password
}

# Log in to Blackboard (POST request)
response = session.post(login_url, data=payload)

# Check if login is successful
if response.ok:
    print("Logged in successfully!")

    # Now access the activity stream page
    stream_page = session.get(activity_stream_url)

    # Parse the HTML content
    soup = BeautifulSoup(stream_page.content, 'html.parser')

    # Find specific content in the activity stream (this will vary)
    activities = soup.find_all('div', class_='activity-item')  # Adjust the class based on HTML structure

    for activity in activities:
        print(activity.text)
else:
    print("Login failed.")
