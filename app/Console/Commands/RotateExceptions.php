<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class RotateExceptions extends Command
{
    protected $signature = 'rotate:exceptions';

    protected $description = 'Rotation disabled: keep all exceptions';

    public function handle()
    {
        // Retention limits have been removed. Do not delete any exceptions.
        $this->info('Exception rotation is disabled. No exceptions were deleted.');
    }
}
