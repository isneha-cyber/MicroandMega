<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use App\Models\Product;
use App\Models\Project;

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate';
    protected $description = 'Generate sitemap.xml';

    public function handle()
    {
        $sitemap = Sitemap::create();

        // Static Pages
        $sitemap->add(
            Url::create('/')
                ->setPriority(1.0)
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_DAILY)
        );

        $sitemap->add('/about');
        $sitemap->add('/service');
        $sitemap->add('/contact');

        // Dynamic Products
        $products = Product::all();
        foreach ($products as $product) {
            $sitemap->add(
                Url::create("/products/{$product->slug}")
                    ->setLastModificationDate($product->updated_at)
                    ->setPriority(0.9)
            );
        }

        // Dynamic Projects
        $projects = Project::all();
        foreach ($projects as $project) {
            $sitemap->add(
                Url::create("/project-details/{$project->slug}")
                    ->setLastModificationDate($project->updated_at)
                    ->setPriority(0.8)
            );
        }

        // Save file
        $sitemap->writeToFile(public_path('sitemap.xml'));

        $this->info('Sitemap generated successfully!');
    }
}