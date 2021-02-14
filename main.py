import asyncio
import urllib.request
from carbonnow import Carbon
import sys


contents = open("fact.txt", "r")

code = """
{
    "id": "5e1e591e-9fdf-43dd-9adf-489a56441ee0",
    "text": "The top 3 health-related searches on the Internet are (in this order): Depression, Allergies, & Cancer.",
    "source": "djtech.net",
    "source_url": "http://www.djtech.net/humor/useless_facts.htm",
    "language": "en",
    "permalink": "https://uselessfacts.jsph.pl/5e1e591e-9fdf-43dd-9adf-489a56441ee0"
}
"""
code = contents.read()
print(contents.read())


async def main():
    carbon = Carbon(
        code=code,
    )
    print(await carbon.save('img'))

if __name__ == '__main__':
    asyncio.run(main())
