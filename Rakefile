# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

task default: ['test:system', 'test', 'test:js']

namespace :test do
  task :js do
    sh 'yarn jest'
  end
end
