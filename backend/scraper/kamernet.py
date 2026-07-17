from bs4 import BeautifulSoup
import requests

def kamernet_scrape(city):
    city = city.strip().lower()
    url = "https://kamernet.nl/en/for-rent/room-" + city

    results = []

    response = requests.get(url).text
    doc = BeautifulSoup(response, "html.parser")
    maincontainer = doc.find(class_ = "MuiContainer-root MuiContainer-maxWidthLg ListingsGrid_root__2kNRD mui-x6n1xk")
    roomscontainer = maincontainer.find_all(class_="SearchResultGrid_root__11Exb SearchResultGrid_responsive__pL2eC")
    rooms = []

    for container in roomscontainer:
        rooms.extend(container.find_all("a"))
   


    for room in rooms:
        image_tag = room.find("img")


        price_tag = room.find(
            "span",
            string=lambda text: text and "€" in text
        )

        room_result = {
            "id": room.get("href"),
            "title": image_tag.get("alt") if image_tag else None,
            "image": image_tag.get("src") if image_tag else None,
            "link": room.get("href"),
            "price": price_tag.get_text(strip=True) if price_tag else None
        }

        results.append(room_result)

    return results
    

