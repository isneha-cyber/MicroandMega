<?php
// database/seeders/CategorySeeder.php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        // Clear existing categories to avoid duplicates
        Category::truncate();

        $categories = [
            [
                'name' => 'Access Control',
                'description' => 'Advanced access control systems for security management',
                'children' => [
                    'Integrated Access Control',
                    'Mass Access System for School, College, Office & Factory',
                    'AI based Access and Attendance Control',
                    'Turnstile ACS'
                ]
            ],
            [
                'name' => 'Fire Alarm',
                'description' => 'Comprehensive fire detection and alarm systems',
                'children' => [
                    'UL Listed Fire Alarm',
                    'EN listed Fire Alarm',
                    'Suppression System',
                    'Deluge System'
                ]
            ],
            [
                'name' => 'Public Address',
                'description' => 'Professional public address and voice alarm systems',
                'children' => [
                    'Network (IP) based PAVA',
                    'PAVA for Hotel, School and College',
                    'Integrated PAVA system'
                ]
            ],
            [
                'name' => 'CCTV',
                'description' => 'Advanced surveillance and security camera systems',
                'children' => [
                    'AI based CCTV',
                    'Control Room Systems',
                    'Audio Video Solution',
                    'CCTV EXTENDER / Matrix',
                    'Intruder Alarm System'
                ]
            ],
            [
                'name' => 'Data Network',
                'description' => 'Complete networking solutions for businesses',
                'children' => [
                    'Ethernet Solution',
                    'Fiber Solution',
                    'Wireless Solution'
                ]
            ],
            [
                'name' => 'Control and Monitor System',
                'description' => 'Advanced monitoring and control systems',
                'children' => [
                    'Weather Station',
                    'Water Leakage Detection',
                    'Air flow Monitor',
                    'Water Flow Monitor',
                    'Linear Heat Detection',
                    'Lora Customization'
                ]
            ],
            [
                'name' => 'Grounding ERT',
                'description' => 'Electrical grounding and earthing solutions',
                'children' => []
            ],
            [
                'name' => 'Digital Lighting',
                'description' => 'Modern digital lighting control systems',
                'children' => []
            ],
        ];

        foreach ($categories as $categoryData) {
            $children = $categoryData['children'] ?? [];
            unset($categoryData['children']);
            
            // Create parent category
            $parent = Category::create([
                'name' => $categoryData['name'],
                'slug' => Str::slug($categoryData['name']),
                'description' => $categoryData['description'] ?? null,
                'is_active' => true,
                'parent_id' => null
            ]);
            
            // Create child categories
            foreach ($children as $childName) {
                Category::create([
                    'name' => $childName,
                    'slug' => Str::slug($childName),
                    'description' => null,
                    'is_active' => true,
                    'parent_id' => $parent->id
                ]);
            }
        }

        $this->command->info('Categories seeded successfully!');
    }
}