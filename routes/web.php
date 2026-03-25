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


    Route::get('/products', function () {
    return Inertia::render('AdminPages/Products');
});
    Route::get('/projects', function () {
    return Inertia::render('AdminPages/Projects');
});
    Route::get('/testimonials', function () {
    return Inertia::render('AdminPages/Testimonials');
});

Route::get('/ourprojects',           [ProjectController::class, 'index'])  ->name('ourprojects.index');
Route::post('/ourprojects',          [ProjectController::class, 'store'])  ->name('ourprojects.store');
Route::put('/ourprojects/{id}',     [ProjectController::class, 'update']) ->name('ourprojects.update'); 
Route::delete('/ourprojects/{id}',   [ProjectController::class, 'destroy'])->name('ourprojects.destroy');
  
  
    // ── Products ──────────────────────────────────────────────────────────

   Route::get('/ourproducts', [ProductController::class, 'index'])->name('ourproducts.index');
    Route::post('/ourproducts', [ProductController::class, 'store'])->name('ourproducts.store');
    Route::put('/ourproducts/{id}', [ProductController::class, 'update'])->name('ourproducts.update');
    Route::delete('/ourproducts/{id}', [ProductController::class, 'destroy'])->name('ourproducts.destroy');
  
     // ── Testimonials ──────────────────────────────────────────────────────
    Route::get('/ourtestimonials',                 [TestimonialController::class, 'index'])  ->name('ourtestimonials.index');
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

   
});



    Route::get('/about',function(){
        return Inertia::render('About');
    });










require __DIR__.'/auth.php';
