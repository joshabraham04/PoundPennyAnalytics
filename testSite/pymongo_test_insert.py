from pymongo_get_database import get_database
dbname = get_database()
collection_name = dbname["user_1_items"]
#
# item_1 = {
#   "_id" : "U1IT00001",
#   "item_name" : "Blender",
#   "max_discount" : "10%",
#   "batch_number" : "RR450020FRG",
#   "price" : 340,
#   "category" : "kitchen appliance"
# }
#
# item_2 = {
#   "_id" : "U1IT00002",
#   "item_name" : "Egg",
#   "category" : "food",
#   "quantity" : 12,
#   "price" : 36,
#   "item_description" : "brown country eggs"
# }

item_3 = {
  "_id" : "U1IT00003",
  "item_name" : "Omar's Bananas",
  "category" : "food",
  "quantity" : 69,
  "price" : 4.20,
  "item_description" : "Omar's bananas that he has lololol"
}
# collection_name.insert_many([item_1,item_2])
collection_name.insert_one(item_3)
