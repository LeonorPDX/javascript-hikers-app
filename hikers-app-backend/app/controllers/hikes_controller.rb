class HikesController < ApplicationController

    def index
        th = Trailhead.find(params[:trailhead_id])
        hikes = th.hikes
        render json: hikes
    end
end

