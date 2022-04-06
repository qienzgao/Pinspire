# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

User.destroy_all
Pin.destroy_all
Board.destroy_all
Follow.destroy_all
SavedPin.destroy_all

user1 = User.create!(email: "OolongTea@email.com", age: 18, password: "oolongtea")
avatar1 = open('https://pinspire-seeds.s3.us-east-1.amazonaws.com/avartar.jpeg')
user1.img.attach(io: avatar1, filename: 'avatar.jpg')
cover1 = open('https://pinspire-seeds.s3.us-east-1.amazonaws.com/ramen.png')
user1.cover.attach(io: cover1, filename: 'ramen.png')

user2 = User.create!(email: "SugarCookie@email.com", age: 18, password: "lovetea")
avatar2 = open('https://pinspire-seeds.s3.us-east-1.amazonaws.com/cookie.png')
user2.img.attach(io: avatar2, filename: 'cookie.png')
cover2 = open('https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/tea.jpeg')
user2.cover.attach(io: cover2, filename: 'tea.png')

user3 = User.create!(email: "apple@email.com", age: 31, password: "password")
user4 = User.create!(email: "banana@email.com", age: 25, password: "password")
user5 = User.create!(email: "candy@email.com", age: 45, password: "password")
user6 = User.create!(email: "durian@email.com", age: 21, password: "password")
user7 = User.create!(email: "eggplant@email.com", age: 39, password: "password")
user8 = User.create!(email: "fig@email.com", age: 33, password: "password")
user9 = User.create!(email: "grape@email.com", age: 22, password: "password")
user10 = User.create!(email: "honeydew@email.com", age: 31, password: "password")

board1 = Board.create!(name: "Mood", details: "Something in my mind", public: true, user_id: user1.id)
board2 = Board.create!(name: "Food", details: "I need to eat!", public: true, user_id: user1.id)
board3 = Board.create!(name: "Good", details: "Share something good in my life", public: true, user_id: user1.id)
board4 = Board.create!(name: "Cool", details: "Cool things happen", public: true, user_id: user1.id)
board5 = Board.create!(name: "Secret", details: "Nobody knows...", public: true, user_id: user1.id)

board6 = Board.create!(name: "City", details: "It's been noisy but I still love it", public: true, user_id: user2.id)
board7 = Board.create!(name: "It's been in in my mind", details: "And I shall never tell", public: true, user_id: user2.id)
board8 = Board.create!(name: "I like it!", details: "Live to eat", public: true, user_id: user2.id)
board9 = Board.create!(name: "Why not?", details: "I really want to make it!", public: true, user_id: user2.id)
board10 = Board.create!(name: "Secret", details: "This is a secret board", public: true, user_id: user2.id)


pin1 = Pin.create!(title: "Awwww don't look at me like that", details: "Yes master!", user_id: user1.id)
img1 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/yesmaster.jpeg")
pin1.img.attach(io: img1, filename: 'yesmaster.jpeg')

pin2 = Pin.create!(title: "Xmas Tree", details: "Merry xsmas!", user_id: user1.id)
img2 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/xmastree.jpeg")
pin2.img.attach(io: img2, filename: 'xmastree.jpeg')

pin3 = Pin.create!(title: "Quail decor", details: "Creative decor!", user_id: user1.id)
img3 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/quaileggs.jpeg")
pin3.img.attach(io: img3, filename: 'quaileggs.jpeg')

pin4 = Pin.create!(title: "Who's hungry now?", details: "Too hungry to calm down!!!", user_id: user1.id)
img4 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/pizza.jpeg")
pin4.img.attach(io: img4, filename: 'pizza.jpeg')

pin5 = Pin.create!(title: "Panda", details: "I want a PANDA too...", user_id: user1.id)
img5 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/panda1.jpeg")
pin5.img.attach(io: img5, filename: 'panda1.jpeg')

pin6 = Pin.create!(title: "Shot!", details: "Nice pics brighten my day!", user_id: user1.id)
img6 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/camera.jpeg")
pin6.img.attach(io: img6, filename: 'camera.jpeg')

pin7 = Pin.create!(title: "Breakfast", details: "Awake my day", user_id: user1.id)
img7 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/brunch.jpeg")
pin7.img.attach(io: img7, filename: 'brunch.jpeg')

pin8 = Pin.create!(title: "Cherry blossom", details: "What's in your mind?", user_id: user1.id)
img8 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/cherryblossom.jpeg")
pin8.img.attach(io: img8, filename: 'cherryblossom.jpeg')

pin9 = Pin.create!(title: "City of ...", details: "", user_id: user1.id)
img9 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/citynight.jpeg")
pin9.img.attach(io: img9, filename: 'citynight.jpeg')

pin10 = Pin.create!(title: "Milkshake", details: "This sweeten my day!", user_id: user1.id)
img10 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/milkshakes.jpeg")
pin10.img.attach(io: img10, filename: 'milkshakes.jpeg')

pin11 = Pin.create!(title: "Picnic Day!", details: "Enjoy outside!", user_id: user1.id)
img11 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/picnic.jpeg")
pin11.img.attach(io: img11, filename: 'picnic.jpeg')

pin12 = Pin.create!(title: "My Collections!", details: "I love them...", user_id: user1.id)
img12 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/radios.jpeg")
pin12.img.attach(io: img12, filename: 'radios.jpeg')

pin13 = Pin.create!(title: "Stary Night", details: "Who's under the same sky?", user_id: user1.id)
img13 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/starynight.jpeg")
pin13.img.attach(io: img13, filename: 'starynight.jpeg')

pin14 = Pin.create!(title: "stay lazy...", details: "", user_id: user1.id)
img14 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/bed.jpeg")
pin14.img.attach(io: img14, filename: 'bed.jpeg')

pin15 = Pin.create!(title: "Sushi Day!", details: "DELICIOUS!", user_id: user1.id)
img15 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/sushi.jpeg")
pin15.img.attach(io: img15, filename: 'sushi.jpeg')

pin16 = Pin.create!(title: "Stay Awake", details: "I need a cup of coffee", user_id: user1.id)
img16 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/coffee.jpeg")
pin16.img.attach(io: img16, filename: 'coffee.jpeg')

pin17 = Pin.create!(title: "I wanna go on a trip...", details: "Who's in?", user_id: user1.id)
img17 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/bike.jpeg")
pin17.img.attach(io: img17, filename: 'bike.jpeg')

pin18 = Pin.create!(title: "Be Brilliant!", details: "", user_id: user1.id)
img18 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/bebrilliant.jpeg")
pin18.img.attach(io: img18, filename: 'bebrilliant.jpeg')

pin19 = Pin.create!(title: "Cutiest owl ever", details: " ^OvO^ ", user_id: user1.id)
img19 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/owl.jpeg")
pin19.img.attach(io: img19, filename: 'owl.jpeg')

pin20 = Pin.create!(title: "Midnight Crave!", details: "That looks yummy!", user_id: user1.id)
img20 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/shrimps.jpeg")
pin20.img.attach(io: img20, filename: 'shrimps.jpeg')





pin21 = Pin.create!(title: "CRAWFISH IS SOOOOO GOOD!", details: "Too good to describe!!!", user_id: user2.id)
img21 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/crawfish.jpeg")
pin21.img.attach(io: img21, filename: 'crawfish.jpeg')

pin22 = Pin.create!(title: "Letters", details: "A-B-C-D-E-F-G-H-I-J-K-Love you still and you know I always will", user_id: user2.id)
img22 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/abc.jpeg")
pin22.img.attach(io: img22, filename: 'abc.jpeg')

pin23 = Pin.create!(title: "Avocado day", details: "Eat avocado and stay healthy", user_id: user2.id)
img23 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/avocado.jpeg")
pin23.img.attach(io: img23, filename: 'avocado.jpeg')

pin24 = Pin.create!(title: "Afternoon", details: "I wish I were a cat...", user_id: user2.id)
img24 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/catsafternoon.jpeg")
pin24.img.attach(io: img24, filename: 'avocado.jpeg')

pin25 = Pin.create!(title: "a corner of the city", details: "", user_id: user2.id)
img25 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/cityside.jpeg")
pin25.img.attach(io: img25, filename: 'cityside.jpeg')

pin26 = Pin.create!(title: "No Coffee No Life", details: "I think I'm addicted to caffeine.", user_id: user2.id)
img26 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/coffeelife.jpeg")
pin26.img.attach(io: img26, filename: 'coffeelife.jpeg')

pin27 = Pin.create!(title: "No Drink No Life", details: "Actually I'm alcoholic", user_id: user2.id)
img27 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/drinks.jpeg")
pin27.img.attach(io: img27, filename: 'drinks.jpeg')

pin28 = Pin.create!(title: "NO EXCUSES!!!", details: "You raped her because her clothes provoked you? I should break your face because your stupidity provokes me!", user_id: user2.id)
img28 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/femanism.jpeg")
pin28.img.attach(io: img28, filename: 'femanism.jpeg')

pin29 = Pin.create!(title: "Good Vibes", details: "What's in your mind?", user_id: user2.id)
img29 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/goodvibes.jpeg")
pin29.img.attach(io: img29, filename: 'goodvibes.jpeg')

pin30 = Pin.create!(title: "Get Icy", details: "Ice cream never fail you!", user_id: user2.id)
img30 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/icecream.jpeg")
pin30.img.attach(io: img30, filename: 'icecream.jpeg')

pin31 = Pin.create!(title: "I ? U", details: "", user_id: user2.id)
img31 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/imissu.jpeg")
pin31.img.attach(io: img31, filename: 'imissu.jpeg')

pin32 = Pin.create!(title: "LOVE IS LOVE", details: "LOVE IS LOVE!", user_id: user2.id)
img32 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/loveislove.jpeg")
pin32.img.attach(io: img32, filename: 'loveislove.jpeg')

pin33 = Pin.create!(title: "My city is waiting for you", details: "til late and lights never extinguish.", user_id: user2.id)
img33 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/nycnight.jpeg")
pin33.img.attach(io: img33, filename: 'nycnight.jpeg')

pin34 = Pin.create!(title: "Pinky Pinky", details: "I love his outfit!", user_id: user2.id)
img34 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/pinkoutfit.jpeg")
pin34.img.attach(io: img34, filename: 'pinkoutfit.jpeg')

pin35 = Pin.create!(title: "GURLS!", details: "SOOOOO PRETTY!", user_id: user2.id)
img35 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/pretty.jpeg")
pin35.img.attach(io: img35, filename: 'pretty.jpeg')

pin36 = Pin.create!(title: "It's raining outside", details: "And what are you doing now?", user_id: user2.id)
img36 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/rainning.jpeg")
pin36.img.attach(io: img36, filename: 'rainning.jpeg')

pin37 = Pin.create!(title: "Whose shadow is that?", details: "", user_id: user2.id)
img37 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/shadow.jpeg")
pin37.img.attach(io: img37, filename: 'shadow.jpeg')

pin38 = Pin.create!(title: "Oolong Tea...", details: "My tea is better than anyone else.", user_id: user2.id)
img38 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/tea.jpeg")
pin38.img.attach(io: img38, filename: 'tea.jpeg')

pin39 = Pin.create!(title: "Stay Healthy!", details: "Check my meal!", user_id: user2.id)
img39 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/precooked.jpeg")
pin39.img.attach(io: img39, filename: 'precooked.jpeg')

pin40 = Pin.create!(title: "Awwww I need a cat like this!", details: "Cats always win!", user_id: user2.id)
img40 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/catdog.jpeg")
pin40.img.attach(io: img40, filename: 'catdog.jpeg')

pin41 = Pin.create!(title: "Fire", details: "What's in your mind?", user_id: user3.id)
img41 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/fire.jpeg")
pin41.img.attach(io: img41, filename: 'fire.jpeg')

pin42 = Pin.create!(title: "Flower Meal", details: "What's in your mind?", user_id: user3.id)
img42 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/flowerinaplate.jpeg")
pin42.img.attach(io: img42, filename: 'flowerinaplate.jpeg')

pin43 = Pin.create!(title: "Hands", details: "What's in your mind?", user_id: user3.id)
img43 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/hands.jpeg")
pin43.img.attach(io: img43, filename: 'hands.jpeg')

pin44 = Pin.create!(title: "Lemonade", details: "What's in your mind?", user_id: user3.id)
img44 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/lemonade.jpeg")
pin44.img.attach(io: img44, filename: 'lemonade.jpeg')

pin45 = Pin.create!(title: "New York City", details: "What's in your mind?", user_id: user3.id)
img45 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/nyc.jpeg")
pin45.img.attach(io: img45, filename: 'nyc.jpeg')




pin46 = Pin.create!(title: "Beautiful Design", details: "What's in your mind?", user_id: user4.id)
img46 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/scaleshape.jpeg")
pin46.img.attach(io: img46, filename: 'scaleshape.jpeg')

pin47 = Pin.create!(title: "Shells", details: "What's in your mind?", user_id: user4.id)
img47 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/shells.jpeg")
pin47.img.attach(io: img47, filename: 'shells.jpeg')

pin48 = Pin.create!(title: "Windows", details: "What's in your mind?", user_id: user4.id)
img48 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/random/windows.jpeg")
pin48.img.attach(io: img48, filename: 'windows.jpeg')

pin49 = Pin.create!(title: "Mirror", details: "What's in your mind?", user_id: user4.id)
img49 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/mirror.jpeg")
pin49.img.attach(io: img49, filename: 'mirror.jpeg')

pin50 = Pin.create!(title: "Home", details: "What's in your mind?", user_id: user4.id)
img50 = open("https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/wooden.jpeg")
pin50.img.attach(io: img50, filename: 'wooden.jpeg')

saved_pin1 = SavedPin.create!(pin_id: pin1.id, board_id: board1.id)
saved_pin2 = SavedPin.create!(pin_id: pin2.id, board_id: board1.id)
saved_pin3 = SavedPin.create!(pin_id: pin3.id, board_id: board1.id)
saved_pin4 = SavedPin.create!(pin_id: pin4.id, board_id: board1.id)
saved_pin5 = SavedPin.create!(pin_id: pin5.id, board_id: board1.id)
saved_pin6 = SavedPin.create!(pin_id: pin6.id, board_id: board2.id)
saved_pin7 = SavedPin.create!(pin_id: pin7.id, board_id: board2.id)
saved_pin8 = SavedPin.create!(pin_id: pin8.id, board_id: board2.id)
saved_pin9 = SavedPin.create!(pin_id: pin9.id, board_id: board2.id)
saved_pin10 = SavedPin.create!(pin_id: pin10.id, board_id: board2.id)
saved_pin11 = SavedPin.create!(pin_id: pin11.id, board_id: board3.id)
saved_pin12 = SavedPin.create!(pin_id: pin12.id, board_id: board3.id)
saved_pin13 = SavedPin.create!(pin_id: pin13.id, board_id: board3.id)
saved_pin14 = SavedPin.create!(pin_id: pin14.id, board_id: board3.id)
saved_pin15 = SavedPin.create!(pin_id: pin15.id, board_id: board3.id)
saved_pin16 = SavedPin.create!(pin_id: pin16.id, board_id: board4.id)
saved_pin17 = SavedPin.create!(pin_id: pin17.id, board_id: board4.id)
saved_pin18 = SavedPin.create!(pin_id: pin18.id, board_id: board4.id)
saved_pin19 = SavedPin.create!(pin_id: pin19.id, board_id: board4.id)
saved_pin20 = SavedPin.create!(pin_id: pin20.id, board_id: board4.id)
saved_pin21 = SavedPin.create!(pin_id: pin21.id, board_id: board5.id)
saved_pin22 = SavedPin.create!(pin_id: pin22.id, board_id: board5.id)
saved_pin23 = SavedPin.create!(pin_id: pin23.id, board_id: board5.id)
saved_pin24 = SavedPin.create!(pin_id: pin24.id, board_id: board5.id)
saved_pin25 = SavedPin.create!(pin_id: pin25.id, board_id: board5.id)
saved_pin26 = SavedPin.create!(pin_id: pin26.id, board_id: board6.id)
saved_pin27 = SavedPin.create!(pin_id: pin27.id, board_id: board6.id)
saved_pin28 = SavedPin.create!(pin_id: pin28.id, board_id: board6.id)
saved_pin29 = SavedPin.create!(pin_id: pin29.id, board_id: board6.id)
saved_pin30 = SavedPin.create!(pin_id: pin30.id, board_id: board6.id)
saved_pin31 = SavedPin.create!(pin_id: pin31.id, board_id: board7.id)
saved_pin32 = SavedPin.create!(pin_id: pin32.id, board_id: board7.id)
saved_pin33 = SavedPin.create!(pin_id: pin33.id, board_id: board7.id)
saved_pin34 = SavedPin.create!(pin_id: pin34.id, board_id: board7.id)
saved_pin35 = SavedPin.create!(pin_id: pin35.id, board_id: board7.id)
saved_pin36 = SavedPin.create!(pin_id: pin36.id, board_id: board8.id)
saved_pin37 = SavedPin.create!(pin_id: pin37.id, board_id: board8.id)
saved_pin38 = SavedPin.create!(pin_id: pin38.id, board_id: board8.id)
saved_pin39 = SavedPin.create!(pin_id: pin39.id, board_id: board8.id)
saved_pin40 = SavedPin.create!(pin_id: pin40.id, board_id: board8.id)
saved_pin41 = SavedPin.create!(pin_id: pin41.id, board_id: board9.id)
saved_pin42 = SavedPin.create!(pin_id: pin42.id, board_id: board9.id)
saved_pin43 = SavedPin.create!(pin_id: pin43.id, board_id: board9.id)
saved_pin44 = SavedPin.create!(pin_id: pin44.id, board_id: board9.id)
saved_pin45 = SavedPin.create!(pin_id: pin45.id, board_id: board9.id)
saved_pin46 = SavedPin.create!(pin_id: pin46.id, board_id: board10.id)
saved_pin47 = SavedPin.create!(pin_id: pin47.id, board_id: board10.id)
saved_pin48 = SavedPin.create!(pin_id: pin48.id, board_id: board10.id)
saved_pin49 = SavedPin.create!(pin_id: pin49.id, board_id: board10.id)
saved_pin50 = SavedPin.create!(pin_id: pin50.id, board_id: board10.id)

follow1 = Follow.create!(follower_id: user1.id, following_id: user2.id)
follow2 = Follow.create!(follower_id: user2.id, following_id: user1.id)
follow3 = Follow.create!(follower_id: user3.id, following_id: user1.id)
follow4 = Follow.create!(follower_id: user4.id, following_id: user1.id)
follow5 = Follow.create!(follower_id: user5.id, following_id: user1.id)
follow6 = Follow.create!(follower_id: user6.id, following_id: user2.id)
follow7 = Follow.create!(follower_id: user7.id, following_id: user2.id)
follow8 = Follow.create!(follower_id: user8.id, following_id: user2.id)
follow9 = Follow.create!(follower_id: user9.id, following_id: user2.id)
follow10 = Follow.create!(follower_id: user10.id, following_id: user2.id)

