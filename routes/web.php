<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ServiceTicketController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');




        Route::get('/category', function () {
    return Inertia::render('AdminPages/Category');
});

    Route::get('/products', function () {
    return Inertia::render('AdminPages/Products');
});
    Route::get('/projects', function () {
    return Inertia::render('AdminPages/Projects');
});
    Route::get('/testimonials', function () {
    return Inertia::render('AdminPages/Testimonials');
});

    Route::get('/service-tickets', function () {
    return Inertia::render('AdminPages/ServiceTicket');
});

    Route::post('/ourprojects', [ProjectController::class, 'store'])->name('ourprojects.store');
    Route::put('/ourprojects/{id}', [ProjectController::class, 'update'])->name('ourprojects.update');
    Route::delete('/ourprojects/{id}', [ProjectController::class, 'destroy'])->name('ourprojects.destroy');
  
  
    // ── Products ──────────────────────────────────────────────────────────

    Route::post('/ourproducts', [ProductController::class, 'store'])->name('ourproducts.store');
    Route::put('/ourproducts/{id}', [ProductController::class, 'update'])->name('ourproducts.update');
    Route::delete('/ourproducts/{id}', [ProductController::class, 'destroy'])->name('ourproducts.destroy');
  

     // ── Testimonials ──────────────────────────────────────────────────────
    Route::post('/ourtestimonials',                [TestimonialController::class, 'store'])  ->name('ourtestimonials.store');
    Route::put('/ourtestimonials/{id}',   [TestimonialController::class, 'update']) ->name('ourtestimonials.update');
    Route::delete('/ourtestimonials/{id}',[TestimonialController::class, 'destroy'])->name('ourtestimonials.destroy');

     // ── Users ──────────────────────────────────────────────────────

        Route::get('/user',function(){
        return Inertia::render('AdminPages/UserManagement');
    });
    Route::get('/ourusers', [UserController::class, 'index'])->name('ourusers.index');       
    Route::post('/ourusers', [UserController::class, 'store'])->name('ourusers.store');      
    Route::put('/ourusers/{id}', [UserController::class, 'update'])->name('ourusers.update'); 
    Route::delete('/ourusers/{id}', [UserController::class, 'destroy'])->name('ourusers.destroy'); 
    

     // ── Activity Log──────────────────────────────────────────────────────
        Route::get('/log',function(){
        return Inertia::render('AdminPages/ActivityLog');
    });
    Route::get('/logs', [LogController::class, 'index'])->name('logs.index');  

    // Service Tickets (Admin)
    
    Route::get('/ourservicetickets', [ServiceTicketController::class, 'index'])->name('ourservicetickets.index');
Route::put('/ourservicetickets/{id}', [ServiceTicketController::class, 'update'])->name('ourservicetickets.update');   // ← ADD THIS

   
});


// Public Category Routes
Route::get('/ourcategories', [CategoryController::class, 'index'])->name('ourcategories.index');
Route::get('/ourcategories/dropdown', [CategoryController::class, 'getDropdown'])->name('ourcategories.dropdown');
Route::get('/ourcategories/{slug}', [CategoryController::class, 'show'])->name('ourcategories.show');

// Public Project Routes (API)
Route::get('/ourprojects', [ProjectController::class, 'index'])->name('ourprojects.index');
Route::get('/ourprojects/{slug}', [ProjectController::class, 'show'])->name('ourprojects.show');

// Public Product Routes (API)
Route::get('/ourproducts', [ProductController::class, 'index'])->name('ourproducts.index');
Route::get('/ourproducts/{slug}', [ProductController::class, 'show'])->name('ourproducts.show');
Route::get('/ourproducts/category/{categorySlug}', [ProductController::class, 'getByCategory'])->name('ourproducts.category');



// Public Testimonials Routes (API)
Route::get('/ourtestimonials', [TestimonialController::class, 'index'])->name('ourtestimonials.index');

// Product Detail Pages (public)
Route::get('/products/category/{categorySlug}', function ($categorySlug) {
    return Inertia::render('ProductDetailPage', ['categorySlug' => $categorySlug]);
})->name('products.category');

Route::get('/products/{slug}', function ($slug) {
    return Inertia::render('ProductDetailPage', ['productSlug' => $slug]);
})->name('products.show');


    Route::get('/about',function(){
        return Inertia::render('About');
    });


     Route::get('/service',function(){
        return Inertia::render('Service');
    });


   Route::get('/projects-page', function () {
    return Inertia::render('ProjectsPage');
})->name('projects.page');

Route::get('/project-details/{slug}', function ($slug) {
    return Inertia::render('ProjectDetailPage', ['slug' => $slug]);
})->name('project.details');




      Route::get('/contact',function(){
        return Inertia::render('ContactUs');
    });

    
      Route::get('/product-details',function(){
        return Inertia::render('ProductDetailPage');
    });


      Route::get('/service-ticket',function(){
        return Inertia::render('ServiceTicket');
    });


// Service Ticket submission (public)
Route::post('/service-tickets', [ServiceTicketController::class, 'store'])->name('service-tickets.store');











require __DIR__.'/auth.php';
