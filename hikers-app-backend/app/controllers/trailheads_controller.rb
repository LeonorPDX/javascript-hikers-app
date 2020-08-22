class TrailheadsController < ApplicationController
    def index
        trailheads = Trailhead.all
        render json: trailheads
    end
end
