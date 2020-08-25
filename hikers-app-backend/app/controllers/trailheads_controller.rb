class TrailheadsController < ApplicationController
    def index
        trailheads = Trailhead.all
        render json: trailheads.to_json(:include => {
            :hikes => {:only => [:name]}
        })
    end
end
