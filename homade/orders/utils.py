def menu_to_dict(items):
    d = dict()
    for i in items:
        meal_name = i['meal__name']
        if meal_name not in d:
            d[meal_name] = dict()
        price = i['price']
        d[meal_name] = price
    return d
