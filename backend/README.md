<!-- What does each package means -->

express >> Backend framwork for building backend/API
mongoose >> it connects and create model for my mongodb database
dotenv >> loads environment variables from .env file
cors >> enable cross origin url sharing ( allows frontend to access backend )
bcrypt >> for hashing and comparing password
jsonwbtoken >> to create and verify JWT tokens

<!-- What does folder structure explains -->
backend 
    --controllers/          <!-- Core Business Logic (when route is hit)-->
    --models                <!-- Mongoose schema Logic (Define how mongozDB document looks)-->
    --routes                <!-- maps API routes that point to controller function -->
    --middleware            <!-- Middleware for Auth / Error Handling (runs before controllers) -->
    --config                <!-- DB config -->
    --.env          
    -- server.js            <!-- Main entry point -->

example : Request to POST /api/bookings
    >> hit routes/booking.routes.js
    >> call createBooking() in controller
    >> use Booking Model from DB and saves data
    >> return response

As a backend dev i must be able to :
1) Create APIs
2) implement JWT Auth
3) Security best practices
4) Mangae databases
5) handle error logging and middleware 
