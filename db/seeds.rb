# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

User.destroy_all

user1 = User.create!(email: "OolongTea@email.com", age: 18, password: "oolongtea")
avatar = open('https://pinspire-seeds.s3.us-east-1.amazonaws.com/avatar.jpeg')
user1.img.attach(io: avatar, filename: 'avatar.jpg')
cover = open('https://pinspire-seeds.s3.us-east-1.amazonaws.com/ramen.png')
user1.cover.attach(io: cover, filename: 'ramen.png')

user2 = User.create!(email: "SugarCookie@email.com", age: 18, password: "lovetea")
user3 = User.create!(email: "apple@email.com", age: 31, password: "password")
user4 = User.create!(email: "banana@email.com", age: 25, password: "password")
user5 = User.create!(email: "candy@email.com", age: 45, password: "password")
user6 = User.create!(email: "durian@email.com", age: 21, password: "password")
user7 = User.create!(email: "eggplant@email.com", age: 39, password: "password")
user8 = User.create!(email: "fig@email.com", age: 33, password: "password")
user9 = User.create!(email: "grape@email.com", age: 22, password: "password")
user10 = User.create!(email: "honeydew@email.com", age: 31, password: "password")

